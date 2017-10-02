import {
  CLICK
} from '../actions/index'

const initialState = {
  tiles: [],
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });
    default:
      return state
  }
}