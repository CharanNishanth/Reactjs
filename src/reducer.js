import { ADD_BOOK, FETCH_BOOKS_SUCCESS,LOAD_BOOKS_START,LOAD_BOOKS_SUCCESS } from "./constants";

const initialState = {
    books:[],
    apibooks: []
}

export const booksReducer = (state = initialState,action) => {
switch(action.type) {
    case ADD_BOOK:
        return {
            ...state,
            loading:false,
            enteredbooks:[action.payload]
    }
    case FETCH_BOOKS_SUCCESS:
        return {
            ...state,
            books:action.payload
     }
     case LOAD_BOOKS_START:
        return {
            ...state,
        }
     case LOAD_BOOKS_SUCCESS:
        return {
            apibooks:action.payload
        }
    default:
        return state;
}
};