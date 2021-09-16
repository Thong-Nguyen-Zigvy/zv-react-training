import {
    CREATE_TASK,
    UPDATE_STATUS_READY,
    UPDATE_STATUS_ERROR_SUBMIT
} from "./types"

export const createTask = (name) => ({type: CREATE_TASK, payload: {name}});

export const updateStatusReady = (id) => ({type: UPDATE_STATUS_READY, payload: {id}})
export const updateStatusErrorSubmit = (id) => ({type: UPDATE_STATUS_ERROR_SUBMIT, payload: {id}})

export const updateDefault = () => ({type: "UPDATE_DEFAULT"})