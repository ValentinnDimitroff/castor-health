import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { Redirect } from 'react-router-dom'
import MetricsForm from './MetricsForm'

const MetricsBaseEdit = ({ title, unit }) => {
    const { pathname, state } = useLocation()
    const resourceListPath = `/${pathname.split('/')[1]}`

    // If edit page is reloaded and there is no state 
    // -> redirect to the corresponding list view
    if (!state)
        return <Redirect to={resourceListPath} />

    return (
        <div>
            <h1>{`Edit ${title} Record - ID:${state.id}`}</h1>
            <div>
                <MetricsForm {...state} unit={unit} />
            </div>
        </div>
    )
}

MetricsBaseEdit.propTypes = {
    title: PropTypes.string,
    unit: PropTypes.string,
}

export default MetricsBaseEdit
