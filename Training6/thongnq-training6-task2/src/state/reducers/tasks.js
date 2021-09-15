import {
    CREATE_TASK,
    UPDATE_STATUS
} from "../actions/types";

const initialState = [];

const tasks = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TASK:
            return [...state, {name: payload.name, status: "Draft"}];
        default: 
            return state;
    }
}

export default tasks;