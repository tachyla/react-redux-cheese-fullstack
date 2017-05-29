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
  }
  return state;
}; 