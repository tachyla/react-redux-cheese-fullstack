export FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = cheese => {
    type: FETCH_CHEESES_REQUEST
}

export FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheese => {
    type: FETCH_CHEESE_SUCCESS
}

export FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = cheese => {
    type: FETCH_CHEESE_ERROR
} 

fetch('/api/cheeses', {
    "method": "GET"

})

