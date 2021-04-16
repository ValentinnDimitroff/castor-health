import { createSlice } from '@reduxjs/toolkit'
import { commonMetricReducer } from '../_utils'
import db from '../../db.json'

const name = 'weight'

const initialState = {
    data: db[name],
    average: 0
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
