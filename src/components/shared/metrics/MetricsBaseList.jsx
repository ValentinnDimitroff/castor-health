import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router'
import { Button, Typography } from '../../design'
import MetricsListRow from './MetricsListRow'
import useListStyles from './useListStyles'

const MetricsBaseList = React.memo(({
    title,
    unit,
    average,
    records,
    ...props
}) => {
    const classes = useListStyles()
    const histoty = useHistory()
    const { pathname } = useLocation()

    const onAddClick = useCallback(
        () => histoty.push(`${pathname}/create`),
        [histoty, pathname]
    )

    const onEditClcik = useCallback(
        (id) => histoty.push(`${pathname}/edit/${id}`),
        [histoty, pathname]
    )

    // Decide if current record's value is higher or lower than previous one
    const getTrend = (record, previousRecord) => {
        return record.value > previousRecord.value
            ? "up"
            : "down"
    }

    return (
        <div {...props}>
            <Typography variant="heading">{title}</Typography>
            <div>
                <div className={classes.toolbar}>
                    <AverageLabel value={average} />
                    <div className={classes.toolbarActions}>
                        <Button onClick={onAddClick}>+ Add New</Button>
                    </div>
                </div>
                <ul className={classes.list}>
                    <li>
                        <Typography variant="label" Component="span">Measured On</Typography>
                        <Typography variant="label" Component="span">Value</Typography>
                        <Typography variant="label" Component="span">Trend</Typography>
                    </li>
                    {records
                        ? records.map((x, i) => (
                            <MetricsListRow
                                key={x.id}
                                {...x}
                                unit={unit}
                                trend={i === 0
                                    ? undefined
                                    : getTrend(x, records[i - 1])}
                                onEditClcik={onEditClcik}
                            />
                        ))
                        : <EmptyList />}
                </ul>
            </div>
        </div>
    )
})

const AverageLabel = ({ value }) => {
    return (
        <>
            <Typography variant="label" Component="span">Average:</Typography>
            <Typography variant="body" Component="span" style={{ paddingLeft: 8 }}>
                {value.toFixed(2)}
            </Typography>
        </>
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
