//async action fetchCheeses returns a (syncronous)dispatch 
export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());
    fetch('/api/cheeses').then(res => {
        if(!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cheese => {
        dispatch(fetchCheesesSuccess());
    }).catch(error => {
        dispatch(fetchCheesesError());
    });
};

//sync action to confirm the receipt of the API request
export FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = cheese => {
    type: FETCH_CHEESES_REQUEST
}

export FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheesesSuccess = cheese => {
    type: FETCH_CHEESE_SUCCESS
}

export FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheesesError = cheese => {
    type: FETCH_CHEESE_ERROR
} 

