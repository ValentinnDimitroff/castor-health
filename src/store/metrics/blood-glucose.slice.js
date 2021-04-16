import { createSlice } from '@reduxjs/toolkit'
import { commonMetricReducer } from '../_utils'

const name = 'blood-glucose'

const initialState = {
    data: [],
    average: 0
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