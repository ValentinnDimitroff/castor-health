import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    typo: props => theme.font[props.variant]
}))

const Typography = ({ variant, className, children, ...props }) => {
    const classes = useStyles({ variant })
    return (
        <p className={`${classes.typo} ${className || ""}`} {...props}>
            {children}
        </p>
    )
}

Typography.propTypes = {
    variant: PropTypes.string,
}

export default Typography
