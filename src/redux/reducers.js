import {SET_TASKS, SET_TASKS_ID} from './type';

const initialState = {
  tasks: [],
  taskId: 1,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {...state, tasks: action.payload};
    case SET_TASKS_ID:
      return {...state, taskId: action.payload};
    default:
      return state;
  }
}

export default taskReducer;
