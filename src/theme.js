const pUnit = 8
const regularFont = 400
const semiBoldFont = 600

export const theme = {
    colors: {
        primary: {
            light: '#5FAFFF',
            main: '#3779ED',
            dark: '#3070CE',
        },
        error: {
            light: '#FF8080',
            main: '#DC143C',
            dark: '#BB022E',
        },
        success: {
            light: '#A5FFC6',
            main: '#2CD06C',
            dark: '#28BC5F',
        }
    },
    font: {
        heading: {
            fontWeight: regularFont,
            fontSize: '32px',
        },
        title: {
            fontWeight: semiBoldFont,
            fontSize: '21px',
        },
        subtitle: {
            fontWeight: semiBoldFont,
            fontSize: '16px',
        },
        body: {
            fontWeight: regularFont,
            fontSize: '14px',
        },
        label: {
            fontWeight: semiBoldFont,
            fontSize: '14px',
            color: '#3A4963',
        },
        body2: {
            fontWeight: regularFont,
            fontSize: '13px',
            color: '#616D82',
        },
        button: {
            fontWeight: semiBoldFont,
            fontSize: '15px',
            color: 'white'
        }
    },
    spacing: (val) => `${val * pUnit}px`,
    spacingY: (val) => `0 ${val * pUnit}px`,
    spacingX: (val) => `${val * pUnit}px 0`,
    spacingXY: (x, y) => `${x * pUnit}px ${y * pUnit}px`,
}