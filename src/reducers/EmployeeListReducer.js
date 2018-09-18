import {EMPLOYEE_FETCH_SUCCESS} from '../actions/types';

const initial_state = {

};

export default (state = initial_state, action) => {
  switch(action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};