import {
    CREATE_TASK,
    UPDATE_STATUS
} from "./types"

export const createTask = (name) => ({type: CREATE_TASK, payload: {name}});

export const updateStatus = (id) => ({type: UPDATE_STATUS, payload: {id}})