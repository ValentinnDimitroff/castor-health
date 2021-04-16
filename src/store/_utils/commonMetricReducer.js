export const commonMetricReducer = {
    addEntry(state, { payload }) {
        state.data.push({
            id: state.data.lenght,
            value: payload,
            date: Date.now().toString()
        })
    },
    updateEntry(state, { payload }) {
        state.data.forEach((item, i) => {
            if (item.id === payload.id) {                
                state.data[i].value = parseFloat(payload.value)
                return
            }
        })
    },
}