import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types";
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
            try{
           const {data} = await axios.post(endpoint, character)
              dispatch({
                 type: ADD_FAV,
                 payload: data,
              });         
        }catch(error){
            console.log(error.message)       
        }
    }
 }

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try{
            const {data} = await axios.delete(endpoint)  
            //console.log(data)          
               dispatch({
                  type: REMOVE_FAV,
                  payload: data,
            });

        } catch (error){
            console.log(error.message)
        }
    };
 };

export const filterCards = (gender) => {
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) =>{
    return{
        type: ORDER,
        payload: order
    }
}

export const resetFavs = () => {
    return{
        type: RESET,
    }
}