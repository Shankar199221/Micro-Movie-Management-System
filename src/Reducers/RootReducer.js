import {combineReducers} from 'redux'
import GetReducer from './GetReducer'

const rootReducer = combineReducers({
      getdata:GetReducer
})

export default rootReducer