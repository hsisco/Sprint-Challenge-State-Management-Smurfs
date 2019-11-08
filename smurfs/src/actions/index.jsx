import axios from 'axios';

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";


export const fetchData = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: ADD_SMURF_START})
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res)
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res
      })
    })
    .catch(err => console.log(err))
}