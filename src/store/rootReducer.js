import { combineReducers } from 'redux'
import metricsReducer from './metrics'

export default combineReducers({
        metrics: metricsReducer,
    })