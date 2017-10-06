import { find, indexOf } from 'lodash'

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

const openTiles = (tile, state) => {
  const found = find(state.tiles, tile)
  console.log('yo found', found)
  if (found.bomb) {
    return Object.assign({}, state, {
      status: 'game over'
    });
  } else {
    found.clicked = true
    const index = indexOf(state.tiles, find(state.tiles, tile))
    const myTiles = Object.assign([], state.tiles)
    myTiles.splice(index, 1, found);

    console.log('yo tiles', myTiles, state.tiles)
    return Object.assign({}, state, {
      tiles: myTiles
    });
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
      return openTiles(action.tile, state)
    default:
      return state
  }
}