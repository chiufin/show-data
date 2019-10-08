import { combineReducers } from 'redux'
import gridReducer from '../features/grid/gridSlice'
import filterReducer from '../features/filters/filtersSlice'
import paginationReducer from '../features/pagination/paginationSlice'


export default combineReducers({
  list: gridReducer,
  filter: filterReducer,
  pagination: paginationReducer,
})