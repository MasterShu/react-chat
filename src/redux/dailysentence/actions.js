import * as types from '../mutation-type';
import { getDetails } from '../../services/common';

const setDailySentence = (cls) => ({
  type: types.SET_DAILY_SENTENTCE,
  payload: cls
})

export function getDailySentence() {
  return async dispatch => {
    const res = await getDetails()
    dispatch(setDailySentence(res))
  }
}

