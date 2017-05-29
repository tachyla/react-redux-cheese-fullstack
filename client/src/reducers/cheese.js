import {FETCH_CHEESES_REQUEST, fetchCheesesRequest,
        FETCH_CHEESES_SUCCESS, fetchCheesesSuccess,
        FETCH_CHEESES_ERROR, fetchCheesesError} from './actions';
const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default (state=initialState, action) => {
  if(action.type === FETCH_CHEESES_REQUEST) {
    state = Object.assign({}, initialState, {
      loading: true
    });
    return state;
  }
  if(action.type === FETCH_CHEESES_SUCCESS) {
    state = Object.assign({}, initialState, {
      loading: false,
      error: null,
      //cheese array should contain the requested cheeses
      //cheeses: []
    });
    return state;
  }
  if(action.type === FETCH_CHEESES_ERROR) {
    state = Object.assign({}, initialState, {
      loading: false,
      //error should contain the error message from fetchCheesesError(error)
      //error: error
    });
    return state;
  }
  return state;
}; 