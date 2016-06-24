// Constants
export const DEMO_ACTION = '<%= camelEntityName %>/DEMO_ACTION';

/**
 *
 * @param value
 * @returns {Action}
 */
export function demoAction(value) {
  return {
    type: DEMO_ACTION,
    payload: value,
  };
}

// Action creators
export const actions = {
  demoAction,
};

// Action handlers
const ACTION_HANDLERS = {
  [DEMO_ACTION]: (state, action) => ({ ...state, value: action.payload }),
};

// Initial state
export const initialState = {
  value: null,
};

// Reducer
export default function <%= camelEntityName %>Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
