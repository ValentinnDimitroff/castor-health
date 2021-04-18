import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import MetricsForm from './MetricsForm'

const MetricsBaseCreate = React.memo(({ title, ...props }) => {
    const { pathname } = useLocation()
    const resourceListPath = `/${pathname.split('/')[1]}`

    return (
        <div>
            <h1>{`Add New ${title} Entry`}</h1>
            <div>
                <MetricsForm redirectPath={resourceListPath} {...props} />
            </div>
        </div>
    )
})

MetricsBaseCreate.propTypes = {
    title: PropTypes.string,
    unit: PropTypes.string,
}

export default MetricsBaseCreate
