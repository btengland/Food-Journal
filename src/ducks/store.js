import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from "redux-promise-middleware"
import userReducer from './userReducer'
import mealReducer from './mealReducer'

const rootReducer = combineReducers({
    user: userReducer,
    meals: mealReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))