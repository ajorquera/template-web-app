import { handleError, handleJson, replaceUrlParams } from './utils';

describe('handleError', () => {
  test('when res.ok is true', async () => {
    const mockResponse = { ok: true };
    const result = await handleError(mockResponse as Response);
    expect(result).toBe(mockResponse);
  });

  test('when res.ok is false', async () => {
    const mockResponse = { ok: false };
    await expect(handleError(mockResponse as Response)).rejects.toThrowError();
  });
});

describe('handleJson', () => {
  test('when the response contains a valid JSON', async () => {
    const mockBody = { message: 'Success' };
    expect(await handleJson({ json: () => mockBody } as unknown as Response)).toEqual(mockBody);
  });

  test('when the response does not contain valid JSON', async () => {
    const mockResponse = { json: () => { throw new Error('Invalid JSON'); } } as unknown as Response;
    expect(await handleJson(mockResponse)).toEqual({});
  });
});

describe('replaceUrlParams', () => {
  test('when the arguments are not valid', () => {
    expect(replaceUrlParams('', {})).toBe('');
    expect(replaceUrlParams(null as any, {})).toBe('');
    expect(replaceUrlParams(undefined as any, {})).toBe('');
  });

  test('when the arguments are valid', () => {
    const url = '/api/user/:id/profile/:profileId';
    const params = { id: '123', profileId: '456' };
    expect(replaceUrlParams(url, params)).toBe('/api/user/123/profile/456');
  });

  test('when the values of params are of different types', () => {
    const url = '/api/user/:id/isActive/:isActive';
    const params = { id: 123, isActive: true };
    expect(replaceUrlParams(url, params)).toBe('/api/user/123/isActive/true');
  });
});
