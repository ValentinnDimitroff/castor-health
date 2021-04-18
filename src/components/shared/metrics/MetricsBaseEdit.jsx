import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { Redirect } from 'react-router-dom'
import MetricsForm from './MetricsForm'
import { metricsActions, getMetricEntryByIdSelector } from '../../../store'

const MetricsBaseEdit = React.memo(({ title, metricKey, ...props }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { pathname } = useLocation()
    
    const resourceListPath = `/${pathname.split('/')[1]}`
    const entryData = useSelector(getMetricEntryByIdSelector(id, metricKey))

    const onSubmit = (payload) => {
        dispatch(metricsActions[metricKey].updateEntry(payload))
    }

    // If edit page is reloaded and there is no state 
    // -> redirect to the corresponding list view
    if (!entryData)
        return <Redirect to={resourceListPath} />

    return (
        <div>
            <h1>{`Edit ${title} Record - ID:${id}`}</h1>
            <div>
                <MetricsForm
                    redirectPath={resourceListPath}
                    onSubmit={onSubmit}
                    {...entryData}
                    {...props}
                />
            </div>
        </div>
    )
})

MetricsBaseEdit.propTypes = {
    title: PropTypes.string,
    unit: PropTypes.string,
}

export default MetricsBaseEdit
