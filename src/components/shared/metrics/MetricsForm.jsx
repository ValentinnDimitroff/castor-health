import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextInput } from '../../design'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        "& > div": {
            padding: theme.spacing(2)
        }
    }
}))

const MetricsForm = ({
    id,
    value: initialValue
}) => {
    const editMode = !!id
    const formRef = useRef()
    const classes = useStyles()
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = () => {
        formRef.current.submit()
    }

    return (
        <form ref={formRef}>
            <div className={classes.form}>
                <div>
                    <TextInput value={value} onChange={onChange} />
                </div>
                <div>
                    <Button onClick={onSubmit}>Submit</Button>
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
