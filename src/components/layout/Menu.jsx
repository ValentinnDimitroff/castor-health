import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles(theme => ({
    menu: {
        "& a": {
            display: 'block',
            textDecoration: 'none',
            padding: theme.spacing(2),
        }
    }
}))

const Menu = () => {
    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Link to="/blood-pressure">Blood Pressure</Link>
            <Link to="/weight">Weight</Link>
            <Link to="/blood-glucose">Blood Glucose Level</Link>
        </div>
    )
}

Menu.propTypes = {

}

export default Menu
