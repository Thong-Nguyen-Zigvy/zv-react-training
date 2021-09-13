import {
    CREATE_TODO,
    RETRIEVE_TODOS,
    UPDATE_TODO,
    DELETE_TODO
} from "../actions/type";

const initialState = [];

const todoReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case CREATE_TODO:
            return [...state, payload];

        case RETRIEVE_TODOS:
            return payload;

        case UPDATE_TODO:
            return state.map(todo => {
                if(todo.id === payload.id){
                    return {...todo, ...payload};
                } else {
                    return todo;
                }
            });

        case DELETE_TODO:
            return state.filter(todo => todo.id !== payload.id);

        default:
            return state;
    }
}

export default todoReducer;