import axios from 'axios';

/**
 * IndexNow API integration for instant URL indexing
 * Supports Bing, Yandex, and other participating search engines
 */

const INDEXNOW_API_KEY = process.env.INDEXNOW_API_KEY || 'f96d024e4e270422f49a3a65a4206bf5';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITE_HOST = 'w1it.com';

export interface IndexNowSubmission {
  url: string;
  key: string;
  keyLocation: string;
}

export interface IndexNowBatchSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export interface IndexNowResponse {
  success: boolean;
  statusCode?: number;
  message?: string;
}

/**
 * Submit a single URL to IndexNow
 * @param url - The full URL to submit (e.g., https://w1it.com/blog/new-post)
 * @returns Promise with submission result
 */
export async function submitUrlToIndexNow(url: string): Promise<IndexNowResponse> {
  try {
    const keyLocation = `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`;

    const payload: IndexNowSubmission = {
      url,
      key: INDEXNOW_API_KEY,
      keyLocation,
    };

    const response = await axios.post(INDEXNOW_ENDPOINT, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      success: true,
      statusCode: response.status,
      message: 'URL submitted successfully to IndexNow',
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        statusCode: error.response?.status,
        message: error.response?.data?.message || error.message,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}

/**
 * Submit multiple URLs to IndexNow in a single batch
 * @param urls - Array of full URLs to submit
 * @returns Promise with submission result
 */
export async function submitBatchToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  try {
    const keyLocation = `https://${SITE_HOST}/${INDEXNOW_API_KEY}.txt`;

    const payload: IndexNowBatchSubmission = {
      host: SITE_HOST,
      key: INDEXNOW_API_KEY,
      keyLocation,
      urlList: urls,
    };

    const response = await axios.post(INDEXNOW_ENDPOINT, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      success: true,
      statusCode: response.status,
      message: `${urls.length} URLs submitted successfully to IndexNow`,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        statusCode: error.response?.status,
        message: error.response?.data?.message || error.message,
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred',
    };
  }
}

/**
 * Submit sitemap URLs to IndexNow
 * This will notify search engines about all pages in your sitemap
 * @returns Promise with submission result
 */
export async function submitSitemapToIndexNow(): Promise<IndexNowResponse> {
  const sitemapUrl = `https://${SITE_HOST}/sitemap.xml`;

  return submitUrlToIndexNow(sitemapUrl);
}
