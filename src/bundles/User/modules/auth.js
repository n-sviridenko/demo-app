// Constants
export const SET_USER = 'auth/SET_USER';
export const UNSET_USER = 'auth/UNSET_USER';
export const SHOW_LOGIN_FORM = 'auth/SHOW_LOGIN_FORM';
export const HIDE_LOGIN_FORM = 'auth/HIDE_LOGIN_FORM';
export const START_FETCHING = 'auth/START_FETCHING';
export const STOP_FETCHING = 'auth/STOP_FETCHING';

/**
 * Sets the current user
 * @param value
 * @returns {Action}
 */
export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

/**
 * Unsets the current user
 * @returns {Action}
 */
export function unsetUser() {
  return {
    type: UNSET_USER,
  };
}

/**
 * @returns {Action}
 */
export function logout() {
  return {
    CALL_API: {
      endpoint: '/api/v1/auth/logout',
      method: 'GET',
      types: [
        START_FETCHING,
        STOP_FETCHING,
        STOP_FETCHING,
        STOP_FETCHING,
      ],
    },
  };
}

/**
 * @returns {Action}
 */
export function showLoginForm() {
  return {
    type: SHOW_LOGIN_FORM,
  };
}

/**
 * @returns {Action}
 */
export function hideLoginForm() {
  return {
    type: HIDE_LOGIN_FORM,
  };
}

// Action creators
export const actions = {
  setUser,
  unsetUser,
  logout,
};

// Action handlers
const ACTION_HANDLERS = {
  [SET_USER]: (state, action) => ({ ...state, user: action.payload }),
  [UNSET_USER]: state => ({ ...state, user: null }),
  [SHOW_LOGIN_FORM]: state => ({ ...state, isLoginFormShown: true }),
  [HIDE_LOGIN_FORM]: state => ({ ...state, isLoginFormShown: false }),
  [START_FETCHING]: state => ({ ...state, isFetching: true }),
  [STOP_FETCHING]: state => ({ ...state, isFetching: false }),
};

// Initial state
export const initialState = {
  isFetching: false,
  isLoginFormShown: false,
  user: null,
};

// Reducer
export default function authReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
