import {
    CREATE_TASK,
    UPDATE_STATUS
} from "./types"

export const createTask = (name) => ({type: CREATE_TASK, payload: {name}});

