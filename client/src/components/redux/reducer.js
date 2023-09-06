import { ADD_FAV, LIST_FAV, REMOVE_FAV } from "./types"
const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
            }
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload }
        case LIST_FAV:
            return {
                ...state,
                myFavorites: action.payload
            }
        default:
            return {...state}
    }
}

export default rootReducer;