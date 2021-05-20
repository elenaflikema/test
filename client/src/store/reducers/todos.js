import {FETCH_ALL, CREATE, FETCH_BY_PARENT_ID, SELECT_ITEM} from "../constants/todoActionTypes";

const initialState = {
    items: [],
    selectedItem: null
};
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALL:
            return {
                ...state,
                items: action.payload.map(item => ({...item, isLoaded: false}))
            };
        case CREATE:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case FETCH_BY_PARENT_ID:
            return {
                ...state,
                items: [
                    ...state.items.map(todo => todo._id === action.payload.parentId ? {...todo, isLoaded: true} : todo),
                    ...action.payload.newData
                ]
            };
        case SELECT_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            return state;
    }
};