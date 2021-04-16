import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const SIDE_BAR_WIDTH = 250

const useStyles = createUseStyles(theme => ({
    appBar: {
        backgroundColor: theme.colors.primary.main,
        height: '60px'
    },
    sideBar: {
        display: 'inline-block',
        width: `${SIDE_BAR_WIDTH}px`,
        height: 'max-content',
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(3)
    },
    main: {
        display: 'inline-block',
        // width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
        width: 'max-content',
        height: 'max-content',
        padding: theme.spacing(2),
    },
    footer: {

    },
}))

const Layout = ({ children }) => {
    const classes = useStyles()

    return (
        <div>
            <header className={classes.appBar}>
                
            </header>
            <div className={classes.sideBar}>
                <div>Menu</div>
                <div>Blood pressure</div>
                <div>Weight</div>
                <div>Blood glucose level</div>
            </div>
            <div className={classes.main}>
                {children}
            </div>
            <footer className={classes.footer}>

            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout
