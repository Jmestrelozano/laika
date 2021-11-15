import { types } from '../types/types';

const initialState = {
  dataExperiencies: [],
};

export const experienciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.dataExperiencies:
      return {
        ...state,
        dataExperiencies: action.payload,
      };

    default:
      return state;
  }
};
