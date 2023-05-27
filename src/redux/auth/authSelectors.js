export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectIsFetchingCurrentUser,
};

export default authSelectors;
