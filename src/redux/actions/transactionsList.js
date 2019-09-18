import {
  FETCH_TRANSACTIONS_LIST_REQUEST,
  FETCH_TRANSACTIONS_LIST_SUCCESS,
  FETCH_TRANSACTIONS_LIST_FAILURE
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
