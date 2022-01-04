import { CounterActionType } from "./CounterActionType";

const initialState = {
  count: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CounterActionType.INC_DEC:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case CounterActionType.INCREMENT_IF_ODD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case CounterActionType.ASYNC_INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};
