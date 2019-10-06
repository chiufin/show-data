import { combineReducers } from 'redux'
import todosReducer from '../features/todos/todosSlice'
import visibilityFilterReducer from '../features/filters/filtersSlice'
import gridReducer from '../features/grid/gridSlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  gridList: gridReducer,
})