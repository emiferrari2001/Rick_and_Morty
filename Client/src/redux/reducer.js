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
            myFavorites: action.payload,
            allCharacters: action.payload 
        };
        

    case REMOVE_FAV:
        console.log('saco fav');
        // return {
        //     ...state,
        //     myFavorites: state.myFavorites.filter(character => character.id !== action.payload), 
        //     allCharacters: state.allCharacters.filter(character => character.id !== action.payload)           
        // }
        console.log('payload remove fav')
        console.log(action.payload)
        return { 
            ...state, 
            myFavorites: action.payload,
            allCharacters: action.payload
        };
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
            const todosLosPjs = state.allCharacters.slice(); // crear una copia del array
            if (action.payload === "A") {
                todosLosPjs.sort((a, b) => a.id - b.id); // ordenar el array
            } else if (action.payload === "D") {
                todosLosPjs.sort((a, b) => b.id - a.id); // ordenar el array
            }
            return {
                ...state,
                myFavorites: todosLosPjs.slice(), // crear una nueva instancia del array ordenado
                allCharacters: todosLosPjs.slice() // actualizar también allCharacters
            }
    case RESET:
        console.log('reset')
        console.log(state.allCharacters);
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