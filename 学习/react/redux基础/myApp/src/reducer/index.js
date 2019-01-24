import { combineReducers } from 'redux';
// import { counter } from '../pages/reducerTest/reducer';
// import todos from '../pages/Todo/reducers/todos'
// import visibilityFilter from '../pages/Todo/reducers/visibilityFilter'
import list from '../pages/AddList/redux'
const rootReducdr = combineReducers({
    // todos,
    // visibilityFilter,
    list
})

export default rootReducdr;