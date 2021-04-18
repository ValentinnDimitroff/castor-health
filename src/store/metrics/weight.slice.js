import { createSlice } from '@reduxjs/toolkit'
import { calcMetricAverage, commonMetricReducer } from '../_utils'
import db from '../../db.json'

const name = 'weight'

const initialState = {
    data: db[name],
    average: calcMetricAverage(db[name])
}

const weightSlice = createSlice({
    name,
    initialState,
    // Adds the addEntry and updateEntry cases
    reducers: commonMetricReducer
})

const weightSliceApi = {
    name,
    ...weightSlice
}

export default weightSliceApi
