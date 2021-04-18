import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { Button, MuiIcons, Typography } from '../../design'

const useIconStyles = createUseStyles(theme => ({
    upIcon: {
        color: theme.colors.success.main,
    },
    downIcon: {
        color: theme.colors.error.main,
    }
}))

const MetricsListRow = React.memo(({ onEditClcik, trend, ...props }) => {
    const classes = useIconStyles()
    const { date, value, unit } = props

    return (
        <li >
            <Typography variant="body" Component="span">{date}</Typography>
            <Typography variant="body" Component="span">{value} {unit}</Typography>
            <span>
                {trend
                    ? trend === "up"
                        ? <MuiIcons.ArrowDropUpIcon className={classes.upIcon} />
                        : <MuiIcons.ArrowDropDownIcon className={classes.downIcon} />
                    : null
                }
            </span>
            <Button color="primary" onClick={() => onEditClcik(props)}>
                Edit
            </Button>
        </li>
    )
})

MetricsListRow.propTypes = {
    date: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    unit: PropTypes.string,
    trend: PropTypes.oneOf(["up", "down"]),
    onEditClcik: PropTypes.func,
}

export default MetricsListRow
