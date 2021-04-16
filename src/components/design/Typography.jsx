import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    typo: props => theme.font[props.variant]
}))

const Typography = ({
    variant = "body",
    Component = "p",
    className,
    children,
    ...props
}) => {
    const classes = useStyles({ variant })

    return (
        <Component className={`${classes.typo} ${className || ""}`} {...props}>
            {children}
        </Component>
    )
}

Typography.propTypes = {
    variant: PropTypes.string,
    Component: PropTypes.string,
}

export default Typography
