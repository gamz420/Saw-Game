import {combineReducers} from 'redux'
import topicsReducer from './topicsReducer'
// import questionReducer from './questionReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  topics: topicsReducer,
//   question: questionReducer,
  user: userReducer
})

export default rootReducer