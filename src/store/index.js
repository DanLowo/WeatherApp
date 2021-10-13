import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import weather from './weather'

const reducer = combineReducers({
    weather
})

const store = configureStore({
    reducer
})


export default store;