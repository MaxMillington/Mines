import {
  CLICK
} from '../actions/index'

let tiles = []

let i

for (i = 1; i <= 5; i++) {
  let j
  for (j = 1; j <= 5; j++) {
    const bomb = Math.random() < 0.7
    tiles.push({ coordinates: [i, j], bomb: bomb, clicked: false })
  }
}

const initialState = {
  tiles: tiles,
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