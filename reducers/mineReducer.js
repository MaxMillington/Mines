import {
  CLICK
} from '../actions/index'

let tiles = []

let i
for (i = 1; i <= 5; i++) {
  let j
  for (j = 1; j <= 5; j++) {
    const bomb = Math.random() < 0.3
    tiles.push({ coordinates: [i, j], bomb: bomb, clicked: false, marked: false })
  }
}

const initialState = {
  tiles: tiles,
  status: 'playing',
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK:
      console.log('hey ive clicked', action)
      return Object.assign({}, state, {
        error: false
      });
    default:
      return state
  }
}