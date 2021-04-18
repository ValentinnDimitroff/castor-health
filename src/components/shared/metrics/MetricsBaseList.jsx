import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { useHistory, useLocation } from 'react-router'
import { Button, MuiIcons, Typography } from '../../design'

const useStyles = createUseStyles(theme => ({
    list: {
        listStyle: 'none',
        "& li": {
            padding: theme.spacing(1),
            "& > span": {
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
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}))

const MetricsBaseList = React.memo(({
    title,
    unit,
    records,
    ...props
}) => {
    const classes = useStyles()
    const histoty = useHistory()
    const { pathname } = useLocation()

    const onAddClick = () => {
        histoty.push(`${pathname}/create`)
    }

    const onEditClcik = ({ id, date, value, }) => {
        histoty.push({
            pathname: `${pathname}/edit/${id}`,
            state: { id, date, value }
        })
    }

    return (
        <div {...props}>
            <Typography variant="heading">{title}</Typography>
            <div>
                <div className={classes.toolbar}>
                    <Button onClick={onAddClick}>+ Add New</Button>
                </div>
                <ul className={classes.list}>
                    <li>
                        <Typography variant="label" Component="span">Measured On</Typography>
                        <Typography variant="label" Component="span">Value</Typography>
                        <Typography variant="label" Component="span">Trend</Typography>
                    </li>
                    {records
                        ? records.map((x, i) => (
                            <RecordRow
                                {...x}
                                key={x.id}
                                unit={unit}
                                trend={i === 0 ? undefined : x.value > records[i - 1].value ? "up" : "down"}
                                onEditClcik={onEditClcik}
                            />
                        ))
                        : <EmptyList />}
                </ul>
            </div>
        </div>
    )
})

const useIconStyles = createUseStyles(theme => ({
    upIcon: {
       color: theme.colors.success.main,
    },
    downIcon: {
        color: theme.colors.error.main,
     }
}))

const RecordRow = React.memo(({ onEditClcik, trend, ...props }) => {
    const classes = useIconStyles()
    const { date, value, unit } = props

    return (
        <li >
            <span>{date}</span>
            <span>{value} {unit}</span>
            <span>{trend
                ? trend === "up"
                    ? <MuiIcons.ArrowDropUpIcon className={classes.upIcon}/>
                    : <MuiIcons.ArrowDropDownIcon className={classes.downIcon} />
                : null
            }</span>
            <Button color="primary" onClick={() => onEditClcik(props)}>Edit</Button>
        </li>
    )
})

const EmptyList = () => (
    <p>No records found</p>
)

MetricsBaseList.propTypes = {
    title: PropTypes.string,
    records: PropTypes.array,
}

export default MetricsBaseList
