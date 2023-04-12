import { ADD_FAV, REMOVE_FAV } from "./action-types"

// ADD_FAV = {type: ADD_FAV, payload: character}

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case ADD_FAV:
        console.log('agrego fav');
        console.log(state.myFavorites)
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload]
        }

    case REMOVE_FAV:
        console.log('saco fav');
        console.log(action.payload)
        return {
            ...state,
            myFavorites: state.myFavorites.filter(character => character.id !== action.payload)            
        }

    default:
        return{
            ...state,
        }
}
}
export default reducer;