import Endpoint from './Endpoint';
import fetcher from './fetcher';

jest.mock('./fetcher');

describe('Endpoint', () => {
  let endpoint: Endpoint;
  beforeEach(() => {
    endpoint = new Endpoint({ url: 'https://api.example.com' });
  });

  test('when no settings are provided', () => {
    const endpoint = new Endpoint();
    expect(endpoint.config).toEqual({ url: '' });
  });

  test('when configurations are provided', () => {
    const configEndpoint = { url: 'https://api.example.com' };
    const endpoint = new Endpoint(configEndpoint);
    expect(endpoint.config).toEqual(configEndpoint);
  });

  test('when the configuration is correct for the GET request', () => {
    const urlParams = { id: 1 };
    const config = { headers: { 'Content-Type': 'application/json' } };

    endpoint.get(urlParams, config);

    expect(fetcher).toHaveBeenCalledWith({
      url      : 'https://api.example.com',
      method   : 'GET',
      urlParams: { id: 1 },
      headers  : { 'Content-Type': 'application/json' }
    });
  });

  test('when the configuration is correct for the POST request', () => {
    const body = { name: 'Mac' };
    const urlParams = { id: 1 };
    const config = { headers: { 'Content-Type': 'application/json' } };

    endpoint.post(body, urlParams, config);

    expect(fetcher).toHaveBeenCalledWith({
      url      : 'https://api.example.com',
      method   : 'POST',
      body     : JSON.stringify(body),
      urlParams: { id: 1 },
      headers  : { 'Content-Type': 'application/json' }
    });
  });

  test('when the configuration is correct for the PUT request', () => {
    const body = { name: 'Mac' };
    const urlParams = { id: 1 };
    const config = { headers: { 'Content-Type': 'application/json' } };

    endpoint.put(body, urlParams, config);

    expect(fetcher).toHaveBeenCalledWith({
      url      : 'https://api.example.com',
      method   : 'PUT',
      body     : JSON.stringify(body),
      urlParams: { id: 1 },
      headers  : { 'Content-Type': 'application/json' }
    });
  });

  test('when the configuration is correct for the DELETE request', () => {
    const urlParams = { id: 1 };
    const config = { headers: { 'Content-Type': 'application/json' } };

    endpoint.delete(urlParams, config);

    expect(fetcher).toHaveBeenCalledWith({
      url      : 'https://api.example.com',
      method   : 'DELETE',
      urlParams: { id: 1 },
      headers  : { 'Content-Type': 'application/json' }
    });
  });
});
