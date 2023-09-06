import { ADD_FAV, REMOVE_FAV, LIST_FAV } from "./types";
import axios from "axios";

const addFav = (character) => {
   const endpoint = '/fav';
   return async (dispatch) => {
      const{data} = await axios.post(endpoint, character)
      return dispatch({
         type: ADD_FAV,
         payload: data
      })
   };
};

const removeFav = (id) => {
   const endpoint = '/fav/' + id;
   return async (dispatch) => {
      const { data } =await axios.delete(endpoint);
      return dispatch({
         type: REMOVE_FAV,
         payload: data,
      });
   };
 };

const listFav = ()=>{
   const endpoint = '/fav';
   return (dispatch) => {
      axios.get(endpoint).then(({data})=>{
         return dispatch({
            type: LIST_FAV,
            payload: data,
         });
      });
   };
};

export {addFav, removeFav, listFav}