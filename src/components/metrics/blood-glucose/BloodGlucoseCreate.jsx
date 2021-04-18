import React from 'react'
import { useDispatch } from 'react-redux'
import { MetricsBaseCreate } from '../../shared'
import { metricsActions } from '../../../store'
 
const BloodGlucoseCreate = () => {
    const dispatch = useDispatch()

    const onSubmit = (payload) => {
        dispatch(metricsActions["blood-glucose"].addEntry(payload))
    }

    return (
        <MetricsBaseCreate title="Blood Glucose" onSubmit={onSubmit} />
    )
}

export default BloodGlucoseCreate
