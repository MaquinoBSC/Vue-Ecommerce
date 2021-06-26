import {TOKEN} from '../utils/constants';

export function setTokenAPI(token){
    localStorage.setItem(TOKEN, token);
}

export function getTokenAPI(){
    return localStorage.getItem(TOKEN);
}

export function deleteTokenAPI(){
   return localStorage.removeItem(TOKEN);
}