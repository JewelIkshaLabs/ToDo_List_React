import { combineReducers } from 'redux'
import { operationsReducer } from './todoapp/Reducers/operations'

export const rootReducer = combineReducers({
    operationsReducer
})