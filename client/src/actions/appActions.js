import axios from 'axios';
import { FETCH_CONTACTS, SELECT_CONTACT, CREATE_USER } from './types';

// import _ from 'lodash';

export const fetchContacts = () => async dispatch => {
  const res = await axios({
    method:'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    json: true
  })
  //console.log(res);
  dispatch({type: FETCH_CONTACTS, payload: res.data});
};
export const selectContact = (contact) => {
  // console.log("selectContact action", contact);
  return {
      type: SELECT_CONTACT,
      payload: contact
    };
}

export const createUser = (values) => {
  const request = axios.post('https://jsonplaceholder.typicode.com/posts', values);
  return {
    type: CREATE_USER,
    payload: request
  }
}


