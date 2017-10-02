import axios from 'axios'

export const CLICK = 'CLICK'

export const click = (bool) => {
  return {
    type: CLICK,
    isLoading: bool
  }
}