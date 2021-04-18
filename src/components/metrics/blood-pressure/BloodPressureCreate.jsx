import React from 'react'
import { useDispatch } from 'react-redux'
import { MetricsBaseCreate } from '../../shared'
import { metricsActions } from '../../../store'

const BloodPressureCreate= () => {
    const dispatch = useDispatch()

    const onSubmit = (payload) => {
        dispatch(metricsActions["blood-pressure"].addEntry(payload))
    }

    return (
        <MetricsBaseCreate title="Blood Pressure" onSubmit={onSubmit} />
    )
}

export default BloodPressureCreate
