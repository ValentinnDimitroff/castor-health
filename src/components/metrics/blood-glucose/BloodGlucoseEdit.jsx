import React from 'react'
import { MetricsBaseEdit } from '../../shared'
import { useDispatch } from 'react-redux'
import { metricsActions } from '../../../store'

const BloodGlucoseEdit = () => {
    const dispatch = useDispatch()

    const onSubmit = (payload) => {
        dispatch(metricsActions["blood-glucose"].updateEntry(payload))
    }

    return (
        <MetricsBaseEdit title="Blood Glucose" onSubmit={onSubmit} />
    )
}



export default BloodGlucoseEdit
