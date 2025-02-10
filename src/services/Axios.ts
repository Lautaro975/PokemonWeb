import axios from "axios";
import { PokemonType } from '../model/pokemon.model';
import { controller } from "../utilities/load";
import {  useApiCall } from '../model/api.model';


const url = "https://pokeapi.co/api/v2/pokemon"

export const getPokemonByName = (name:string) :useApiCall<PokemonType>=>{
    return(
        { apiCall: axios.get(`${url}/${name}`,{signal:controller.signal}), controller}
    ) 
}
export const getPokemonById = async(id:number)=>{
    return(
        { apiCall: axios.get(`${url}/${id}`,{signal:controller.signal}), controller}
    ) 
}
  
export const postPokemon = async(PokemonModel:PokemonType)=>{
    try {
        const response = axios.post(`${url}`,PokemonModel,{signal:controller.signal});
       if((await response).status !== 201){
        throw new Error("Inavalid response")
       }
    } catch (error) {
        console.log(error,"Error in the request");
    }
}

export default {getPokemonByName,getPokemonById,postPokemon}