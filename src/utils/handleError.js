import React from 'react'
import ErrorToastApi from '@Component/common/error/ErrorToastApi';
import { MESSAGE_ERROR } from '@Const/const';
import { STORAGE_ID_TOKEN } from '@Const/storage';
import axios from 'axios'
import { API_URL } from '../const/config';
import { showToastError } from './toast';
import { closeSession } from './storage';

export const refreshToken = async () => {
  const tokenID = localStorage.getItem(STORAGE_ID_TOKEN) || '';
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const userEmail = await axios
    .get(
      `${API_URL}${this.API_EMAIL_TOKEN}?token_id=${tokenID}`,
      options
    )
    .then((response) => response.data);

  return axios
    .post(`${API_URL}${this.API_TOKEN}?email=${userEmail}`, options)
    .then((response) => response);
}

export const handleError = async (error) => {
  if (error.response?.status === 401 ) {
    closeSession()
  } else if (error.response?.status === 400) {
    try {
      const {data} = error.response
      if (data?.title) {
        const {title, detail} = data
        showToastError(<ErrorToastApi title={title} detail={detail}/>)
      } else {
        const keys = Object.keys(data.errors)
        if (keys.length > 0) {
          const values = Object.values(data.errors);
          showToastError(`${keys[0]}: ${values[0]}`)
        } else {
          const {message} = data
          showToastError(message)
        }
      } 
     
    } catch (_error) {
      showToastError(MESSAGE_ERROR)
    }
   
  } else if (error.response?.status === 404){
    // Todo: Pendiente
  }else {
    const {response} = error
    if (response?.data?.title) {
      const {title, detail} = response.data
      showToastError(<ErrorToastApi title={title} detail={detail}/>)
    } else {
      showToastError(MESSAGE_ERROR)
    }
  }

  return Promise.reject(error)
};