import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function createUser(firstName,lastName ,userName, userAuth ) {
  return axios.post('/api/user',{firstName, lastName, userName, email: userAuth.email, authid: userAuth.sub }).then((user) =>{
    dispatcher.dispatch({
      type: actionTypes.CREATE_USER,
      data: user.data
    })
}).catch((error) => (console.error(error)))
}

export function loadUser(userId) {
  return axios.get(`/api/user/${userId}`).then((user) =>{
    console.log('estoy en el action..', user );
    dispatcher.dispatch({
      type: actionTypes.LOAD_USER,
      data: user.data
    })
}).catch((error) => (console.error(error)))
}
