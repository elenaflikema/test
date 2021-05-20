import * as api from '../../http/api';
import {FETCH_ALL, CREATE, FETCH_BY_PARENT_ID, SELECT_ITEM} from "../constants/todoActionTypes";

export const fetchRootTodos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRootTodos();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch(error) {
        console.log(error);
    }
};

export const createTodo = (todo) => async (dispatch) => {
    try {
        const { data } = await api.createTodo(todo);

        dispatch({ type: CREATE, payload: data});
    } catch(error) {
        console.log(error);
    }
};

export const fetchTodos = ({ isLoaded, parentId}) => async (dispatch) => {
    try {
        let newData = [];
        if (!isLoaded) {
            const { data } = await api.fetchTodos(parentId);
            newData = [ ...data ];
        }
        dispatch({ type: FETCH_BY_PARENT_ID, payload: { newData, parentId }});
    } catch(error) {
        console.log(error);
    }
};

export const selectItem = ( id ) => ({ type: SELECT_ITEM, payload: id});