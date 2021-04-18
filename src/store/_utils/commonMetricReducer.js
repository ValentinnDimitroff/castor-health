export const commonMetricReducer = {
    addEntry(state, { payload }) {
        state.data.push({
            id: state.data.length,
            value: payload.value,
            date: Date.now().toString()
        })

        state.average = calcMetricAverage(state.data)
    },
    updateEntry(state, { payload }) {
        state.data.forEach((item, i) => {
            if (item.id === payload.id) {
                state.data[i].value = parseFloat(payload.value)
                return
            }
        })

        state.average = calcMetricAverage(state.data)
    },
}

export const calcMetricAverage = (dataArr) => {
    const totalSum = dataArr.reduce((sum, item) => sum += parseFloat(item.value), 0)
    const result = totalSum / (dataArr.length)

    return result
}