import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  // Authorization: 'Bearer token'-> required to each operation

  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 -> POST @ /users/signup
 -> body: {name, email, password}
 -> After succeed registration set token in HTTP-header
*/
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 -> POST @ /users/login
 -> body: {email, password}
 -> After succeed registration set token in HTTP-header
*/
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 -> POST @ /users/logout
 -> After succeed registration remove token from HTTP-header
*/
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 -> GET @ /users/current
 -> headers: 
      Authorization: Bearer token
    1. Get token from state with getState()
    2. If token not exist, exit without any operations
    3. If token exist, add it to the HTTP-header and proceed operation
*/

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Token not exist');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
