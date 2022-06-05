import { GET_CITIES, SET_TASKS, SET_TASKS_ID } from "./type";

///redux thunk for future reference

// const API_URL = 'https://mocki.io/v1/aac8b81a-139c-4235-82e6-0dbadf33f2b7';

// export const getCities = () => {
//     try {
//         return async dispatch => {
//             const result = await fetch(API_URL, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const json = await result.json();
//             if (json) {
//                 dispatch({
//                     type: GET_CITIES,
//                     payload: json
//                 });
//             } else {
//                 console.log('Unable to fetch!');
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

export const setTasks = task => dispatch => {
    dispatch({
        type: SET_TASKS,
        payload: task,
    });
};

export const setTaskId = taskId => dispatch => {
    dispatch({
        type: SET_TASKS_ID,
        payload: taskId,
    });
};
