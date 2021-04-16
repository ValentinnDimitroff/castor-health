import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import Typography from './Typography'

const useStyles = createUseStyles(theme => ({
    button: {
        display: 'inline-block',
        borderRadius: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: props => theme.colors[props.color].dark,
        padding: theme.spacingXY(1, 2),
    }
}))

const Button = ({ color = "primary", children, ...props }) => {
    const classes = useStyles({ color })

    return (
        <div {...props} className={classes.button}>
            <Typography variant="button" Component="span">
                {children}
            </Typography>
        </div>
    )
}

Button.propTypes = {

}

export default Button
