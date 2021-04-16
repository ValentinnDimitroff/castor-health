import { createSlice } from '@reduxjs/toolkit'
import { commonMetricReducer } from '../_utils'

const name = 'blood-pressure'

const initialState = {
    data: [],
    average: 0
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