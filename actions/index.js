import axios from 'axios'

export const CLICK = 'CLICK'
export const RESTART = 'RESTART'

export const click = (markType, tile) => {
  return {
    type: CLICK,
    markType: markType,
    tile: tile
  }
}

export const restart = () => {
  return {
    type: RESTART,
  }
}