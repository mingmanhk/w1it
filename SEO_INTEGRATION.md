# SEO Integration Guide

## Overview

Your website now has comprehensive SEO integration with:
1. **IndexNow** - Instant URL indexing for Bing, Yandex, and other search engines
2. **Bing Webmaster Tools** - Direct URL and content submission to Bing

## IndexNow Integration

### What is IndexNow?

IndexNow is a protocol that allows you to instantly notify search engines (Bing, Yandex, etc.) when content is created, updated, or deleted on your website. This speeds up the discovery and indexing of your pages.

### Setup

1. **Environment Variable**: Add to `.env.local` and Vercel
   ```
   INDEXNOW_API_KEY=f96d024e4e270422f49a3a65a4206bf5
   ```

2. **API Key File**: Already created at `/public/f96d024e4e270422f49a3a65a4206bf5.txt`
   - This file is publicly accessible at `https://w1it.com/f96d024e4e270422f49a3a65a4206bf5.txt`
   - Required by IndexNow to verify site ownership
   - The filename must match your `INDEXNOW_API_KEY` value

3. **Verification**: The key file allows IndexNow to verify you own the domain

### Usage

#### Submit a Single URL

```bash
curl -X POST https://w1it.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"url": "https://w1it.com/blog/new-post"}'
```

#### Submit Multiple URLs (Batch)

```bash
curl -X POST https://w1it.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://w1it.com/blog/post-1",
      "https://w1it.com/blog/post-2",
      "https://w1it.com/services/cloud-services"
    ]
  }'
```

#### Use from Your Code

```typescript
// In your Next.js app
const response = await fetch('/api/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://w1it.com/blog/new-post' })
});

const result = await response.json();
console.log(result); // { success: true, message: "URL submitted successfully to IndexNow" }
```

#### Use the Library Functions Directly

```typescript
import { submitUrlToIndexNow, submitBatchToIndexNow } from '@/lib/indexnow';

// Submit single URL
const result = await submitUrlToIndexNow('https://w1it.com/blog/new-post');

// Submit multiple URLs
const batchResult = await submitBatchToIndexNow([
  'https://w1it.com/blog/post-1',
  'https://w1it.com/blog/post-2',
]);
```

### When to Use IndexNow

- **New Blog Posts**: Immediately after publishing
- **Updated Content**: When you make significant changes to existing pages
- **New Pages**: When adding new service pages, case studies, etc.
- **Sitemap Updates**: After regenerating your sitemap

### Limits

- Up to 10,000 URLs per batch submission
- Daily submission limits may apply (varies by search engine)

## Bing Webmaster Tools Integration

### Setup

1. **Environment Variables**: Already configured in `.env.local`
   ```
   BING_URL_SUBMISSION_API_KEY=1f3bccb8e1d243fe973a2d86d6720631
   BING_CONTENT_SUBMISSION_API_KEY=1f3bccb8e1d243fe973a2d86d6720631
   ```

2. **Verification Meta Tag**: Already added to root layout
   - The meta tag `msvalidate.01` is included in your site's metadata
   - This verifies your site with Bing Webmaster Tools

### Usage

#### Submit a URL to Bing

```bash
curl -X POST https://w1it.com/api/bing-webmaster \
  -H "Content-Type: application/json" \
  -d '{"url": "https://w1it.com/blog/new-post"}'
```

#### Submit Content with HTTP Message

```bash
curl -X POST https://w1it.com/api/bing-webmaster \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://w1it.com/blog/new-post",
    "type": "content",
    "httpMessage": "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html>...</html>"
  }'
```

#### Use from Your Code

```typescript
// Simple URL submission
const response = await fetch('/api/bing-webmaster', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://w1it.com/blog/new-post' })
});

// Content submission with HTTP message
const contentResponse = await fetch('/api/bing-webmaster', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://w1it.com/blog/new-post',
    type: 'content',
    httpMessage: httpMessage // Full HTTP response message
  })
});
```

#### Use the Library Functions Directly

```typescript
import { submitUrlToBing, submitContentToBing } from '@/lib/bing';

// Submit URL
const result = await submitUrlToBing(
  'https://w1it.com',
  'https://w1it.com/blog/new-post'
);

// Submit content with HTTP message
const contentResult = await submitContentToBing({
  siteUrl: 'https://w1it.com',
  url: 'https://w1it.com/blog/new-post',
  httpMessage: 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<html>...</html>'
});
```

## Best Practices

### 1. Automated Submission Workflow

Consider integrating these APIs into your content publishing workflow:

```typescript
// Example: In your blog post creation/update handler
async function publishBlogPost(post: BlogPost) {
  // Save to database
  await savePost(post);

  const url = `https://w1it.com/blog/${post.slug}`;

  // Submit to both IndexNow and Bing
  await Promise.all([
    fetch('/api/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    }),
    fetch('/api/bing-webmaster', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    })
  ]);
}
```

### 2. Error Handling

Always handle errors gracefully:

```typescript
try {
  const response = await fetch('/api/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  });

  const result = await response.json();

  if (!result.success) {
    console.error('Failed to submit URL:', result.message);
    // Optionally retry or log for manual review
  }
} catch (error) {
  console.error('Network error:', error);
}
```

### 3. Rate Limiting

Be mindful of submission frequency:
- Don't submit the same URL multiple times in a short period
- Use batch submissions when possible
- Consider implementing a queue system for large-scale updates

### 4. Monitoring

Track your submissions:
- Log successful submissions to your database
- Monitor API response codes
- Review search engine webmaster tools for indexing status

## Verification Steps

### Verify IndexNow Setup

1. Check that the key file is accessible:
   ```bash
   curl https://w1it.com/f96d024e4e270422f49a3a65a4206bf5.txt
   ```
   Should return: `f96d024e4e270422f49a3a65a4206bf5`

2. Test the API endpoint:
   ```bash
   curl -X POST https://w1it.com/api/indexnow \
     -H "Content-Type: application/json" \
     -d '{"url": "https://w1it.com"}'
   ```

### Verify Bing Integration

1. Check that the verification meta tag is present:
   ```bash
   curl https://w1it.com | grep msvalidate
   ```
   Should include: `<meta name="msvalidate.01" content="1f3bccb8e1d243fe973a2d86d6720631">`

2. Test the Bing API endpoint:
   ```bash
   curl -X POST https://w1it.com/api/bing-webmaster \
     -H "Content-Type: application/json" \
     -d '{"url": "https://w1it.com"}'
   ```

## Files Added/Modified

### New Files
- `/public/f96d024e4e270422f49a3a65a4206bf5.txt` - IndexNow API key file
- `/src/lib/indexnow.ts` - IndexNow utility functions
- `/src/app/api/indexnow/route.ts` - IndexNow API endpoint
- `/src/app/api/bing-webmaster/route.ts` - Bing Webmaster API endpoint

### Modified Files
- `/src/app/layout.tsx` - Added Bing verification meta tag
- `.env.local` - Added IndexNow and Bing API keys
- `.env.example` - Added SEO API key documentation

## Resources

- [IndexNow Documentation](https://www.indexnow.org/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Bing Webmaster API Documentation](https://learn.microsoft.com/en-us/bingwebmaster/api-reference)

## Next Steps

1. **Add Environment Variables to Vercel**
   - Go to your Vercel project → Settings → Environment Variables
   - Add these three variables for Production, Preview, and Development:
     ```
     INDEXNOW_API_KEY=f96d024e4e270422f49a3a65a4206bf5
     BING_URL_SUBMISSION_API_KEY=1f3bccb8e1d243fe973a2d86d6720631
     BING_CONTENT_SUBMISSION_API_KEY=1f3bccb8e1d243fe973a2d86d6720631
     ```

2. **Verify Site in Bing Webmaster Tools**
   - Visit https://www.bing.com/webmasters
   - Add your site (the meta tag is already in place)

3. **Test the Integrations**
   - Submit your homepage and key pages
   - Monitor indexing status in webmaster tools

4. **Automate Submissions**
   - Integrate into your content publishing workflow
   - Consider server-side hooks for automatic submissions

5. **Monitor Performance**
   - Track which pages get indexed quickly
   - Review search console data
   - Optimize based on insights
