import {
    CREATE_TODO,
    RETRIEVE_TODOS,
    UPDATE_TODO,
    DELETE_TODO,
    FILTER_TODO_BY_NAME
} from "../actions/type";

const initialState = [];

const todoReducer = (todos = initialState, action) => {
    const {type, payload} = action;

    switch (type){
        case CREATE_TODO:
            return [...todos, payload];

        case RETRIEVE_TODOS:
            return payload;

        case UPDATE_TODO:
            return todos.map(todo => {
                if(todo.id === payload.id){
                    return {...todo, ...payload};
                } else {
                    return todo;
                }
            });

        case DELETE_TODO:
            return todos.filter(todo => todo.id !== payload.id);

        case FILTER_TODO_BY_NAME:
            return todos.filter(todo => todo.name.includes(payload.name));

        default:
            return todos;
    }
}

export default todoReducer;