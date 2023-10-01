import {RootState} from "@/store";

export const selectAccountIsLoggedIn = (state: RootState): boolean => {
  return !!(state.account.accessToken && state.account.id);
}

export const selectAccountAccessToken = (state: RootState): string|null => {
  return state.account.accessToken;
}

export const selectAccountData = (state: RootState) => {
  return state.account;
}

