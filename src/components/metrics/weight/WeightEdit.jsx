import React from 'react'
import { MetricsBaseEdit } from '../../shared'
import { useDispatch } from 'react-redux'
import { metricsActions } from '../../../store'

const WeightEdit = () => {
    const dispatch = useDispatch()

    const onSubmit = (payload) => {
        dispatch(metricsActions["weight"].updateEntry(payload))
    }

    return (
        <MetricsBaseEdit title="Weight" unit="kg" onSubmit={onSubmit} />
    )
}

export default WeightEdit
