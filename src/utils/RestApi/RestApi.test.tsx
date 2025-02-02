import RestApi from './RestApi';

describe('RestApi', () => {
  let api: RestApi;
  beforeEach(() => {
    api = new RestApi([
      { name: 'getUser', url: '/user', method: 'GET' },
      { name: 'createUser', url: '/user', method: 'POST' }
    ]);
  });

  test('when initializing with provided endpoints', () => {
    const getUserEndpoint = api.get('getUser');
    const createUserEndPoint = api.get('createUser');

    expect(getUserEndpoint).toBeDefined();
    expect(createUserEndPoint).toBeDefined();
  });

  test('when a new endpoint needs to be added', () => {
    api.add({ name: 'deleteUser', url: '/user', method: 'DELETE' });
    const deleteUserEndPoint = api.get('deleteUser');

    expect(deleteUserEndPoint).toBeDefined();
  });

  test('when an existing endpoint needs to be removed', () => {
    api.remove('getUser');
    const getUserEndPoint = api.get('getUser');

    expect(getUserEndPoint).toBeUndefined();
  });
});
