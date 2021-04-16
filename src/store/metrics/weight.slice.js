import { createSlice } from '@reduxjs/toolkit'
import { commonMetricReducer } from '../_utils'

const name = 'weight'

const initialState = {
    data: [],
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
