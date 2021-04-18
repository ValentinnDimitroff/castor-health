import { createSlice } from '@reduxjs/toolkit'
import { calcMetricAverage, commonMetricReducer } from '../_utils'
import db from '../../db.json'

const name = 'blood-glucose'

const initialState = {
    data: db[name],
    average: calcMetricAverage(db[name])
}

const bloodGlucoseSlice = createSlice({
    name,
    initialState,
    // Adds the addEntry and updateEntry cases
    reducers: commonMetricReducer
})

const bloodGlucoseSliceApi = {
    name,
    ...bloodGlucoseSlice
}

export default bloodGlucoseSliceApi