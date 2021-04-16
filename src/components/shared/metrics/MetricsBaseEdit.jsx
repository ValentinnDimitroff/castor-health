import React from 'react'
import PropTypes from 'prop-types'

const MetricsBaseEdit = ({ title }) => {
    return (
        <div>
            <h1>{`Edit ${title} Record`}</h1>
            <div>
                
            </div>
        </div>
    )
}

MetricsBaseEdit.propTypes = {
    title: PropTypes.string,
}       

export default MetricsBaseEdit
