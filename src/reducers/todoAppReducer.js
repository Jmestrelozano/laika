import { types } from '../types/types';

const initialState = {
  stateModalPayment: false,
};

export const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.stateModalPayment:
      console.log(action);
      return {
        ...state,
        stateModalPayment: action.payload,
      };

    default:
      return state;
  }
};
