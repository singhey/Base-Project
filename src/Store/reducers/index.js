import { combineReducers } from 'redux'
import Snackbar from './snackbar'

export const initialState = {
  Snackbar: {
    open: true,
    message: 'This is default message',
    type: 'success',
    duration: 6000
  },
  Cart: {
    subTotal: 0,
    tax: 0,
    items: []
  },
  Dishes: {
    isFetching: false,
    error: false,
    items: []
  }
}

const reducers = combineReducers({
  Snackbar
})

export default reducers;