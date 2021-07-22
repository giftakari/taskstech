<<<<<<< HEAD
import * as actions from "../actions/actionTypes";
import { InitialState } from "../store/initialState";

function jobsReducer(state = InitialState, action) {
  switch (action.type) {
    case actions.ADD_JOB:
      return [...state, action.payload];
    case actions.GET_JOB_STATUS:
      return action.payload;
    default:
      return state;
  }
=======
import * as actions from '../actions/actionTypes';

function jobsReducer(state = {}, action) {
    switch (action.type) {
        case actions.ADD_JOB:
            return [
                ...state,
                action.payload
            ];
        case actions.GET_JOB_STATUS:
            return action.payload
        default:
            return state;
    }
>>>>>>> 51ec4fc566a850ed58c34e7f3ec9b0ee06e24aa8
}

export default jobsReducer;
