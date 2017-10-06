import axios from 'axios'

export const CLICK = 'CLICK'

export const click = (markType, tile) => {
  return {
    type: CLICK,
    markType: markType,
    tile: tile
  }
}