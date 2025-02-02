
import { type UrlParams } from './interfaces';

const isEmptyObject = (obj: Object) => {
  return !!obj && Object.keys(obj).length === 0;
}

export const handleError = async (res: Response) => {
  if (!res.ok) {
    res.json = await res.json();
    console.error(res);
    throw res;
  }

  return res;
};

export const handleJson = async (res: Response) => {
  let response;
  try {
    response = await res.json();
  } catch (error) {
    response = {};
  }
  return response;
};

export const replaceUrlParams = (url: string, params: any) => {
  if (!url) return '';
  const fulllUrl =
    typeof params === 'object'
      ? Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(
          `:${key}`,
          value === undefined ? '' : (value as any)
        );
      }, url)
      : url;

  return fulllUrl.replace(/\/:[^/]+/g, '');
};

export const buildUrl = (
  url: string,
  urlParams?: UrlParams,
  baseUrl?: string
) => {
  const urlWithBase = baseUrl ? `${baseUrl}${url}` : url;

  /// Replace params inside the url
  const fullUrl = replaceUrlParams(urlWithBase, urlParams);

  /// Build the url object
  let urlObj: URL;
  try {
    urlObj = new URL(fullUrl);
  } catch (e) {
    urlObj = new URL(fullUrl, window.location.origin);
  }

  if (!isEmptyObject(urlParams)) {
    const params = getUrlParamsNotUse(urlWithBase, urlParams);
    const searchParams = new URLSearchParams(params);
    urlObj.search = searchParams.toString();
  }

  return urlObj.toString();
};

const getUrlParamsNotUse = (url, urlParams?: UrlParams) => {
  return (
    Object.entries(urlParams ?? {}).reduce((acc, [key, value]) => {
      if (!url.includes(`:${key}`)) {
        acc[key] = value;
      }

      return acc;
    }, {}) || {}
  );
};
