import axios from 'axios';

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload
})

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const registerUser = (payload) => {
  return(dispatch) =>{
    axios.post('/auth/sign-up', payload)
    .then(({data}) => dispatch(registerRequest(data)))
    .catch(error => dispatch(setError(error)))
  }
}