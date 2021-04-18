import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextInput, Typography } from '../../design'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router'

const useStyles = createUseStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        "& > div": {
            padding: theme.spacing(2)
        }
    },
    unit: {
        paddingLeft: theme.spacing(1)
    }
}))

const MetricsForm = ({
    id,
    value: initialValue = 0,
    redirectPath,
    unit,
    onSubmit = () => { },
}) => {
    const formRef = useRef()
    const history = useHistory()
    const classes = useStyles()
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const _onSubmit = useCallback(
        () => {
            onSubmit({ id, value })
            history.push(redirectPath)
        },
        [onSubmit, id, value, history, redirectPath]
    )

    return (
        <form ref={formRef}>
            <div className={classes.form}>
                <div>
                    <Typography variant="label">
                        Enter Value
                    </Typography>
                    <TextInput value={value} onChange={onChange} />
                    <Typography variant="body" Component="span" className={classes.unit}>
                        {unit}
                    </Typography>
                </div>
                <div>
                    <Button onClick={_onSubmit}>Submit</Button>
                </div>
            </div>
        </form>
    )
}

MetricsForm.propTypes = {
    id: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default MetricsForm
