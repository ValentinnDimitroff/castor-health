import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    list: {
        listStyle: 'none',
        "& li": {
            padding: theme.spacing(1),
            "& > span": {
                display: 'inline-block',
                padding: theme.spacingY(2),
                "&:nth-child(1)": {
                    // Date
                    width: '150px',
                },
                "&:nth-child(2)": {
                    // Value
                    width: '100px',
                },
                "&:nth-child(3)": {
                    // Trend
                    width: '100px',
                }
            },
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(4)
    },
    toolbarActions: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    }
}))

export default useStyles