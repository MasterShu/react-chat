import * as types from '../mutation-type'
export * from './actions'

const initState = {
  errno: 1,
  title: '',
  content: '',
  note: '',
  picture: '',
  picture2: '',
  picture3: ''
}

export function dailysentence(state=initState, action) {
  switch (action.type) {
    case [types.SET_DAILY_SENTENTCE]:
      state = action.payload
      return state

    default:
      return state
  }
}
