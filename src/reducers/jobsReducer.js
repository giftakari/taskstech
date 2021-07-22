import * as actions from "../actions/actionTypes";

function jobsReducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_JOB:
      return [...state, action.payload];
    case actions.GET_JOB_STATUS:
      return action.payload;
    default:
      return state;
  }
}

export default jobsReducer;
