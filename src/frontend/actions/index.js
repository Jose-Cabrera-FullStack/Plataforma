import axios from 'axios';

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const selectDate = payload => ({
  type: 'SELECT_DATE',
  payload,
});

export const submitDate = payload => ({
  type: 'SUBMIT_DATE',
  payload,
});

export const deleteSelectedDate = payload => ({
  type: 'DELETE_DATE',
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
  payload,
});

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const submitSelectedDate = (payload, redirectUrl) => {
  return(dispatch) => {
    axios.post('/auth/courses', payload)
    
    .then(({data}) => dispatch(registerRequest(data)))
    .then(() => { 
      window.location.href = redirectUrl
    })
    .catch(error => dispatch(setError(error)))
  };
};

export const registerUser = (payload, redirectUrl) => {
  return(dispatch) => {
    axios.post('/auth/sign-up', payload)
    .then(({data}) => dispatch(registerRequest(data)))
    .then(() => { 
      window.location.href = redirectUrl
    })
    .catch(error => dispatch(setError(error)))
  };
};

export const loginUser = ({email, password}, redirectUrl) => {
  return(dispatch) => {
    axios({
      url:'/auth/sign-in', 
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
    .then(({data}) => {
      document.cookie = `email=${data.email}`;
      document.cookie = `name=${data.name}`;
      document.cookie = `id=${data.id}`;
      dispatch(loginRequest(data));
    })
    .then(() => { 
      window.location.href = redirectUrl
    })
    .catch(error => dispatch(setError(error)))
  };
};