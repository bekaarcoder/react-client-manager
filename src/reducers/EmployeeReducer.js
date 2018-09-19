import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS} from '../actions/types';

const initial_state = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case EMPLOYEE_CREATE:
      return initial_state;
    case EMPLOYEE_SAVE_SUCCESS:
      return initial_state;
    default:
      return state;
  }
};