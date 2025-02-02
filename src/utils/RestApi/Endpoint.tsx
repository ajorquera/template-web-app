import fetcher, { type FetchProps } from './fetcher';
import { type EndpointProps, type UrlParams } from './interfaces';

const isMergebleObject = (item: any): boolean => item && typeof item === 'object' && !Array.isArray(item);

const mergeDeep = (target: any, ...sources: any[]): any => {
  if (!sources.length) return target;
  const source = sources.shift();
  if (source === undefined) return target;
  if (target === undefined) target = {};
  if (isMergebleObject(target) && isMergebleObject(source)) {
    Object.keys(source).forEach(key => {
      if (isMergebleObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
  return mergeDeep(target, ...sources);
}



class Endpoint {
  static alias = {
    create: 'POST',
    read  : 'GET',
    update: 'PUT',
    delete: 'DELETE'
  };

  /// Public methods
  constructor (
    public config?: Partial<EndpointProps>
  ) {
    this.config = config ?? { url: '' };
    Object.entries(Endpoint.alias).forEach(([alias, method]) => {
      this[alias] = this[method.toLowerCase()];
    });
  }

  get (urlParams?: UrlParams, config?: Partial<EndpointProps>) {
    const props = mergeDeep({}, this.config, config, { method: 'GET', urlParams }) as FetchProps;
    return fetcher(props);
  }

  post (body: any, urlParams?: UrlParams, config?: Partial<EndpointProps>) {
    const props = mergeDeep({}, this.config, config, { method: 'POST', body: JSON.stringify(body), urlParams }) as unknown as FetchProps;
    return fetcher(props);
  }

  put (body: any, urlParams?: UrlParams, config?: Partial<EndpointProps>) {
    const props = mergeDeep({}, this.config, config, { method: 'PUT', body: JSON.stringify(body), urlParams }) as unknown as FetchProps;
    return fetcher(props);
  }

  delete (urlParams?: UrlParams, config?: Partial<EndpointProps>) {
    const props = mergeDeep({}, this.config, config, { method: 'DELETE', urlParams }) as FetchProps;
    return fetcher(props);
  }
}

export default Endpoint;
