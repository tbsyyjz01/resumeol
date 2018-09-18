import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import axios from 'axios'

import { GET_ERRORS, SET_CURRENT_USER } from './types';


export const register = (userData, history)=>dispatch=>{
    axios.post('/api/users/register', userData)
    .then(history.push('/login'))
    .catch(err=>(
        dispatch({
            type: GET_ERRORS,
            payload:err.reponse.data
        })
    ))
}

export const loginUser = (userData)=>dispatch =>{
    axios.post('/api/users/login', userData)
    .then(res=>{
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));})
    .catch(err=>(
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
    ))
}

export const setCurrentUser=(decoded)=>{
    return {
        type:SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    setCurrentUser({})
}