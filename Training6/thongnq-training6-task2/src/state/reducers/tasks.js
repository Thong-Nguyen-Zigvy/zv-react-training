import {
    CREATE_TASK,
    UPDATE_STATUS_SUBMITTING,
    UPDATE_STATUS_READY,
    UPDATE_STATUS_ERROR,
    UPDATE_STATUS_SUCCESS
} from "../actions/types";

import {v4 as uuidv4} from 'uuid';

const initialState = [];

const tasks = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TASK:
            return [...state, {name: payload.name,
                            status: "Draft",
                            id: uuidv4()}];

        case UPDATE_STATUS_READY:
            return state.map(task => {
                if(task.id === payload.id){
                    return {...task, status: "Ready"};
                }
                return task;
            })
        case UPDATE_STATUS_ERROR:
            return state.map(task => {
                if(task.id === payload.id){
                    return {...task, status: "Error"};
                }
                return task;
            })
        case UPDATE_STATUS_SUBMITTING:
            return state.map(task => {
                if(task.id === payload.id){
                    return {...task, status: "Submitting"};
                }
                return task;
            })
        case UPDATE_STATUS_SUCCESS:
            return state.map(task => {
                if(task.id === payload.id){
                    return {...task, status: "Success"};
                }
                return task;
            })

        case "UPDATE_DEFAULT":
            return state.map(task => {
                    return {...task, status: "Draft"};
            })
        default: 
            return state;
    }
}

export default tasks;