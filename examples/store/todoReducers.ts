
import {List} from 'immutable';
import {Todo} from "../Todo";
import {ADD_TODO,CLEAR_ALL,DELETE_TODO,LOAD_TODOS, TOGGLE_ALL, TOGGLE_TODO} from './actionsTypes';

export function todoReducers(state: List<Todo>, action) {
    switch(action.type) {
        case LOAD_TODOS:
            return List(action.todos);
        case ADD_TODO:
            return state.push(action.newTodo);
        default:
            return state;
    }

}