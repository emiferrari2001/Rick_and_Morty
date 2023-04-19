import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types"

// ADD_FAV = {type: ADD_FAV, payload: character}

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
switch(action.type){
    case ADD_FAV:
        console.log('agrego fav');
        //console.log(state.myFavorites)
        return {
            ...state,
            //al estado actual de all characters le estoy agregando el valor actual
            myFavorites: [...state.allCharacters, action.payload],
            // guardo un estado con la misma informacion para realizar el filtrado en otros casos
            // para no estar pisando el valor y tener una copia
            allCharacters: [...state.allCharacters, action.payload]
        }

    case REMOVE_FAV:
        console.log('saco fav');
        return {
            ...state,
            myFavorites: state.myFavorites.filter(character => character.id !== action.payload), 
            allCharacters: state.allCharacters.filter(character => character.id !== action.payload)           
        }
    case FILTER:
        console.log('filtro genero');
        console.log(state.myFavorites);
        const {allCharacters} = state;
        if (action.payload === 'Todos'){
            return{
                ...state,
                myFavorites: allCharacters,
                allCharacters: allCharacters,
            }
        }
        //es lo mismo que hacer const allCharacters = state.allCharacters
        const allCharsFiltered = state.allCharacters.filter(character => character.gender === action.payload)
        return{
            ...state,
            //el componente me muestra myFavorites entonces hago que esa propiedad contenga solo los valores filtrados
            myFavorites: allCharsFiltered,
            // sin embargo, mantengo una copia de todos los personajes por si quiero filtrar de nuevo
            allCharacters: allCharacters
        }
    case ORDER:
        console.log('filtro orden');
        const todosLosPjs = state.allCharacters;
        // guardo copia para hacer sort
        console.log(todosLosPjs);
        console.log(action.payload);
        if (action.payload === "A") {
            return{
                ...state,
                myFavorites: todosLosPjs.sort((a, b) => a.id - b.id)
            }
          } else if (action.payload === "D") {
            return{
                ...state,
                myFavorites: todosLosPjs.sort((a, b) => b.id - a.id)
            }
            // tambien se puede hacer ternario
            // return{
            //     ...state,
            //     myFavorites: 
            //     action.payload=== 'A'
            //     ? todosLosPjs.sort((a,b) => a.id-b.id)
            //     : todosLosPjs.sort((a,b) => b.id - a.id)
            // }
        }
    case RESET:
        return {
            ...state,
            myFavorites: state.allCharacters,
            allCharacters: state.allCharacters
        }

    default:
        return{
            ...state,
        }
}
}
export default reducer;