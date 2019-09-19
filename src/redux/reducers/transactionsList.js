import {
  FETCH_TRANSACTIONS_LIST_REQUEST,
  FETCH_TRANSACTIONS_LIST_SUCCESS,
  FETCH_TRANSACTIONS_LIST_FAILURE,
  TOGGLE_TRANSACTIONS_MODAL_POPUP
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  transactionsData: [],
  isOpen: false
};

export default function transactionsList(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRANSACTIONS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_TRANSACTIONS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactionsData: [...action.payload.transactions]
      }
    case  FETCH_TRANSACTIONS_LIST_FAILURE: 
      return {
        ...state,
        isLoading: false,
         }
    case  TOGGLE_TRANSACTIONS_MODAL_POPUP: 
      return {
        ...state,
        isOpen: action.payload,
        }
       default:
        return state;
  }
}