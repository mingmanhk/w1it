
import axios from 'axios';

const BING_URL_SUBMISSION_API_KEY = process.env.BING_URL_SUBMISSION_API_KEY;
const BING_CONTENT_SUBMISSION_API_KEY = process.env.BING_CONTENT_SUBMISSION_API_KEY;
const BING_API_URL = 'https://ssl.bing.com/webmaster/api.svc/json';

interface BingSubmitUrlResponse {
  d: null;
}

export async function submitUrlToBing(siteUrl: string, pageUrl: string): Promise<boolean> {
  if (!BING_URL_SUBMISSION_API_KEY) {
    console.error('Bing URL Submission API key is not configured.');
    return false;
  }

  try {
    const response = await axios.post<BingSubmitUrlResponse>(
      `${BING_API_URL}/SubmitUrl?apikey=${BING_URL_SUBMISSION_API_KEY}`,
      {
        siteUrl,
        url: pageUrl,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      console.log(`Successfully submitted URL to Bing: ${pageUrl}`);
      return true;
    } else {
      console.error(`Failed to submit URL to Bing. Status: ${response.status}`, response.data);
      return false;
    }
  } catch (error) {
    console.error('Error submitting URL to Bing:', error);
    return false;
  }
}

interface BingContentSubmissionPayload {
    siteUrl: string;
    url: string;
    httpMessage: string;
}

export async function submitContentToBing(payload: BingContentSubmissionPayload): Promise<boolean> {
    if (!BING_CONTENT_SUBMISSION_API_KEY) {
        console.error('Bing Content Submission API key is not configured.');
        return false;
    }

    try {
        const response = await axios.post(
            `${BING_API_URL}/SubmitContent?apikey=${BING_CONTENT_SUBMISSION_API_KEY}`,
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status === 200) {
            console.log(`Successfully submitted content to Bing for URL: ${payload.url}`);
            return true;
        } else {
            console.error(`Failed to submit content to Bing. Status: ${response.status}`, response.data);
            return false;
        }
    } catch (error) {
        console.error('Error submitting content to Bing:', error);
        return false;
    }
}
