import { createSlice } from '@reduxjs/toolkit'
import { calcMetricAverage, commonMetricReducer } from '../_utils'
import db from '../../db.json'

const name = 'blood-pressure'

const initialState = {
    data: db[name],
    average: calcMetricAverage(db[name])
}

const bloodPressureSlice = createSlice({
    name,
    initialState,
    // Adds the addEntry and updateEntry cases
    reducers: commonMetricReducer
})

const bloodPressureSliceApi = {
    name,
    ...bloodPressureSlice
}

export default bloodPressureSliceApi