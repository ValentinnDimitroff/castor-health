import React from 'react'
import { MetricsBaseList } from '../../shared'
import {  useSelector } from 'react-redux'
import { singleMetricSelector } from '../../../store'

const WeightList = () => {
    const { data, average } = useSelector(singleMetricSelector("weight"))
    

    return (
        <MetricsBaseList title="Weight" records={data} average={average} unit="kg" />
    )
}


export default WeightList
