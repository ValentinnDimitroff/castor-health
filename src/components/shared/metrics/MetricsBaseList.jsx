import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { useHistory, useLocation } from 'react-router'

const useStyles = createUseStyles(theme => ({
    list: {
        listStyle: 'none',
        "& li": {
            padding: theme.spacing(1),
            "& span": {
                display: 'inline-block',
                padding: theme.spacingY(2),
                "&:nth-child(1)": {
                    // Date
                    width: '150px',
                },
                "&:nth-child(2)": {
                    // Value
                    width: '100px',
                },
                "&:nth-child(3)": {
                    // Trend
                    width: '100px',
                }
            },
        }
    }
}))

const MetricsBaseList = ({ title, records, ...props }) => {
    const classes = useStyles()

    return (
        <div {...props}>
            <h1>{title}</h1>
            <div>
                <ul className={classes.list}>
                    <li>
                        <span>Measured On</span>
                        <span>Value</span>
                        <span>Trend</span>
                    </li>
                    {records
                        ? records.map(x => <RecordRow key={x.id} {...x} />)
                        : <EmptyList />}
                </ul>
            </div>
        </div>
    )
}

const RecordRow = ({ id, date, value }) => {
    const histoty = useHistory()
    const { pathname } = useLocation()

    const onClick = () => {
        histoty.push(`${pathname}/edit/${id}`)
    }

    return (
        <li >
            <span>{date}</span>
            <span>{value}</span>
            <span>--</span>
            <button onClick={onClick}>Edit</button>
        </li>
    )
}

const EmptyList = () => (
    <p>No records found</p>
)

MetricsBaseList.propTypes = {
    title: PropTypes.string,
    records: PropTypes.array,
}

export default MetricsBaseList
