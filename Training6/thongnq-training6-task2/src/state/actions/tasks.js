import {
    CREATE_TASK,
    UPDATE_STATUS_READY,
    UPDATE_STATUS
} from "./types"

export const createTask = (name) => ({type: CREATE_TASK, payload: {name}});

export const updateStatus = (id,status) => ({type: UPDATE_STATUS, payload: {id, status}});

export const updateStatusReady = (id) => ({type: UPDATE_STATUS_READY, payload: {id}});

export const updateDefault = () => ({type: "UPDATE_DEFAULT"})