import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import Menu from './Menu'
import { Typography } from '../design'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles(theme => ({
    container: {
        // minHeight: "100vh",
        display: "inline-flex",
        flexFlow: "row wrap",
        width: "100%",
        height: "100%",
    },
    appBar: {
        backgroundColor: theme.colors.primary.main,
        flex: "0 0 100%",
        height: "60px",
        display: "inline-block",
    },
    title: {
        paddingLeft: theme.spacing(2),
        color: 'white'
    },
    sideBar: {
        padding: theme.spacing(1),
        borderRight: '1px solid gray',
        width: '250px'
    },
    main: {
        display: 'flex',
        width: '100%',
        minHeight: 'calc(100vh - 152px)',
        padding: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2)
    },
    footer: {
        flex: "0 0 100%",
        height: "60px",
        display: "inline-block",
        backgroundColor: 'gray',
    },
}))

const Layout = ({ children }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <header className={classes.appBar}>
                <Link to="/">
                    <Typography variant="title" className={classes.title}>Castor Health</Typography>
                </Link>
            </header>
            <div className={classes.main}>
                <div className={classes.sideBar}>
                    <Menu />
                </div>
                <div className={classes.content}>
                    {children}
                </div>
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
