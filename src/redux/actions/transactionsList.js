import {
  FETCH_TRANSACTIONS_LIST_REQUEST,
  FETCH_TRANSACTIONS_LIST_SUCCESS,
  FETCH_TRANSACTIONS_LIST_FAILURE,
  TOGGLE_TRANSACTIONS_MODAL_POPUP
} from './actionTypes';
import { RSAA } from 'redux-api-middleware';
import { getTransactions } from '../../configurations/apiEndPoints';

export const getTransactionsList = (reportData = {}) => dispatch => {
  return dispatch({
    [RSAA]: {
    types: [FETCH_TRANSACTIONS_LIST_REQUEST, FETCH_TRANSACTIONS_LIST_SUCCESS, FETCH_TRANSACTIONS_LIST_FAILURE],
    headers: {'Content-Type': 'application/json'},
    endpoint: `${getTransactions}.json`,
    method: 'GET'
    }
});
};

export const toggleTransactionModal = (isOpen = false) => dispatch => {
  return dispatch({
   type: TOGGLE_TRANSACTIONS_MODAL_POPUP,
   payload: isOpen
});
};
