export const commonMetricReducer = {
    addEntry(state, { payload }) {
        state.data.push(payload)
    },
    updateEntry(state, { payload }) {
        state.data.forEach((item, i) => {
            if (item.id === payload) {
                state.data[i] = payload
                return
            }
        })
    },
}