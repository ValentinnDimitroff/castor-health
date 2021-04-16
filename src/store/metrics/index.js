import { combineReducers } from 'redux'
import bloodGlucoseSlice from './blood-glucose.slice'
import bloodPressureSlice from './blood-pressure.slice'
import weightSlice from './weight.slice'

const metricsReducer = combineReducers({
    [bloodGlucoseSlice.name]: bloodGlucoseSlice.reducer,
    [bloodPressureSlice.name]: bloodPressureSlice.reducer,
    [weightSlice.name]: weightSlice.reducer
})

const metricsActions = {
    [bloodGlucoseSlice.name]: bloodGlucoseSlice.actions,
    [bloodPressureSlice.name]: bloodPressureSlice.actions,
    [weightSlice.name]: weightSlice.actions,
}

// export * from './weight.selectors'
export { metricsActions }

export default metricsReducer