import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { Redirect } from 'react-router-dom'

const MetricsBaseEdit = ({ title }) => {
    const { pathname, state } = useLocation()
    const resourceListPath = `/${pathname.split('/')[1]}`

    // If edit page is reloaded and there is no state 
    // -> redirect to the corresponding list view
    if (!state)
        return <Redirect to={resourceListPath} />

    const { id, value } = state

    return (
        <div>
            <h1>{`Edit ${title} Record - ID:${id}`}</h1>
            <div>
                <form>
                    <div>
                        <input type="number" value={value} />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

MetricsBaseEdit.propTypes = {
    title: PropTypes.string,
}

export default MetricsBaseEdit
