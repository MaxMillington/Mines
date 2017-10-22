import { find, indexOf } from 'lodash'

import {
  CLICK,
  RESTART
} from '../actions/index'

const initialTiles = () => {
  let tiles = []

  let i
  for (i = 1; i <= 5; i++) {
    let j
    for (j = 1; j <= 5; j++) {
      const bomb = Math.random() < 0.3
      tiles.push({ coordinates: [i, j], bomb: bomb, clicked: false, marked: false })
    }
  }

  return tiles
}

const openAdjacent = (tile, myTiles) => {
  let i
  console.log('myTiles', myTiles)
  for (i = 0; i <= 5; i++) {
    // myTiles
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

    // console.log('yo tiles', myTiles, state.tiles)
    openAdjacent(found, myTiles)
    return Object.assign({}, state, {
      tiles: myTiles
    });
  }
}

const initialState = {
  tiles: initialTiles(),
  status: 'playing',
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK:
      return openTiles(action.tile, state)
    case RESTART:
      return Object.assign({}, state, {
        tiles: initialTiles(),
        status: 'playing',
        error: false
      });
    default:
      return state
  }
}