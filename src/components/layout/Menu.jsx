import React from 'react'
// import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { Typography } from '../design'

const useStyles = createUseStyles(theme => ({
    menu: {
        "& a": {
            padding: theme.spacing(2),
        }
    }
}))

const Menu = () => {
    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Link to="/blood-pressure">
                <Typography variant="subtitle" Component="span">Blood Pressure</Typography>
            </Link>
            <Link to="/weight">
                <Typography variant="subtitle" Component="span">Weight</Typography>
            </Link>
            <Link to="/blood-glucose">
                <Typography variant="subtitle" Component="span">Blood Glucose Level</Typography>
            </Link>
        </div>
    )
}

// Menu.propTypes = {

// }

export default Menu
