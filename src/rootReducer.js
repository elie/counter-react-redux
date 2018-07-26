const INITIAL_STATE = {
  count: 0
};

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;
}

export default rootReducer;
