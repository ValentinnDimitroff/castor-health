import React from 'react'
import { useDispatch } from 'react-redux'
import { MetricsBaseCreate } from '../../shared'
import { metricsActions } from '../../../store'

const WeightCreate = () => {
    const dispatch = useDispatch()

    const onSubmit = (payload) => {
        dispatch(metricsActions["weight"].addEntry(payload))
    }

    return (
        <MetricsBaseCreate title="Weight" onSubmit={onSubmit} />
    )
}

export default WeightCreate
