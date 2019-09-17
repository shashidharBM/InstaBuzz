import {
  FETCH_PORTFOLIO_REPORTS_REQUEST,
  FETCH_PORTFOLIO_REPORTS_SUCCESS,
  FETCH_PORTFOLIO_REPORTS_FAILURE
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  businessData: []
};

export default function portfolioDetailedData(state = initialState, action) {
  switch(action.type) {
    case FETCH_PORTFOLIO_REPORTS_REQUEST:
      return {
        ...state,
        isLoading: action.payload
      }
    case FETCH_PORTFOLIO_REPORTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        businessData: [...action.payload]
      }
    case FETCH_PORTFOLIO_REPORTS_FAILURE: 
      return {
        ...state,
        isLoading: action.payload,
         }
       default:
        return state;
  }
}