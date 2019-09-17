import {
  FETCH_PORTFOLIO_REPORTS_REQUEST,
  FETCH_PORTFOLIO_REPORTS_SUCCESS,
  FETCH_PORTFOLIO_REPORTS_FAILURE
} from './actionTypes';
import RSSA from 'redux-api-middleware'

export const getPortfolioData = (reportData = {}) => dispatch => {
  return dispatch({
    types:[FETCH_PORTFOLIO_REPORTS_REQUEST, FETCH_PORTFOLIO_REPORTS_SUCCESS, FETCH_PORTFOLIO_REPORTS_FAILURE],
    payload: reportData
});
};
