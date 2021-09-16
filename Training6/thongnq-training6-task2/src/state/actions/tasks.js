import {
    CREATE_TASK,
    UPDATE_STATUS_READY
} from "./types"

export const createTask = (name) => ({type: CREATE_TASK, payload: {name}});

export const updateStatusReady = (id) => ({type: UPDATE_STATUS_READY, payload: {id}})

export const updateDefault = () => ({type: "UPDATE_DEFAULT"})