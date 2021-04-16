import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import Menu from './Menu'

const SIDE_BAR_WIDTH = 250

const useStyles = createUseStyles(theme => ({
    appBar: {
        backgroundColor: theme.colors.primary.main,
        height: '60px'
    },
    sideBar: {
        display: 'inline-block',
        width: `${SIDE_BAR_WIDTH}px`,
        height: 'auto',
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        borderRight: '1px solid gray',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    main: {
        display: 'flex',
        width: 'max-content',
        height: '100%',
        padding: theme.spacing(2),
        flex: '1 1 auto',
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
                <Menu />
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
