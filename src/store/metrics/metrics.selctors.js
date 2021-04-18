import { createSelector } from '@reduxjs/toolkit'

export const singleMetricSelector = (key) => state => state.metrics[key]

export const getMetricEntryByIdSelector = (id, key) => createSelector(
    singleMetricSelector(key),
    ({ data }) => data && data.filter(item => item.id === parseInt(id))[0]
)
