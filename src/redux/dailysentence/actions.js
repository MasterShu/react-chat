import * as types from '../mutation-type';
import { getDetails } from '../../services/common';

const setDailySentence = (cls) => ({
  type: types.SET_DAILY_SENTENTCE,
  cls
})

export function getDailySentence() {
  return dispatch => {
    const res = getDetails()
    dispatch(setDailySentence(res))
  }
}

