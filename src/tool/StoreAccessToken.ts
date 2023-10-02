
const localStorageIsAvailable = typeof localStorage !== 'undefined';

const StoreAccessToken = {
  save: (accessToken: string) => {
    if (localStorageIsAvailable) {
      localStorage.setItem('access_token', accessToken);
    }
  },
  clean: () => {
    if (localStorageIsAvailable) {
      localStorage.setItem('access_token', '');
    }
  },
  get: (): string|null => {
    if (localStorageIsAvailable) {
      // TODO: Get rid of the fake token
      return localStorage.getItem('access_token') || 'Test access token';
    }
    return null;
  }
};

export default StoreAccessToken;
