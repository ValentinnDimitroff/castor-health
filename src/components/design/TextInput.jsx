import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    input: {
        borderRadius: '10px',
        border: '2px solid #C3C7CF',
        height: '30px',
        padding: theme.spacingY(1),
        "&:active, &:focus, &:hover": {
            outline: 0,
            borderColor: theme.colors.primary.main,
        },
        ...theme.font.body
    }
}))

const TextInput = ({ value, onChange, ...props }) => {
    const classes = useStyles()

    return (
        <input
            type="text"
            className={classes.input}
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

TextInput.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
}

export default TextInput
