import streams from '../apis/streams';
import history from '../helper/history';
import {
   SIGN_IN,
   SIGN_OUT,
   CREATE_STREAM,
   FETCH_STREAMS,
   FETCH_STREAM,
   DELETE_STREAM,
   EDIT_STREAM
  } from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formaValues => async (dispatch, getState) => {
  const response = await streams.post('/streams', {...formaValues, userId: getState().auth.userId});
  dispatch({type:CREATE_STREAM, payload:response.data});
  history.push('/');
}

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({type: FETCH_STREAMS, payload: response.data});
}

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({type: FETCH_STREAM, payload:response.data});
}

export const editStream = (id, formaValues) => async dispatch => {
  const response =  await streams.patch(`/streams/${id}`, formaValues);
  dispatch({type: EDIT_STREAM, payload:response.data});
  history.push('/');
}

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({type: DELETE_STREAM, payload:id});
  history.push('/');
}