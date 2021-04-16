import React from 'react'
import { MetricsBaseEdit } from '../../shared'
import { useDispatch } from 'react-redux'
import { metricsActions } from '../../../store'

const BloodPressureEdit = () => {
    const dispatch = useDispatch()

    const onSubmit = (payload) => {
        dispatch(metricsActions["blood-pressure"].updateEntry(payload))
    }

    return (
        <MetricsBaseEdit title="Blood Pressure" onSubmit={onSubmit}/>
    )
}


export default BloodPressureEdit
