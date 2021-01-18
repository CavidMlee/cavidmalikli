import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        // error: {
        //     // main: red.A400,
        // },
        background: {
            default: '#fff',
        },
    },
});
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#707070',
        },
        secondary: {
            main: '#19857b',
        },
        // error: {
        //     // main: red.A400,
        // },
        background: {
            default: '#fff',
        },
    },
});

export {
    lightTheme,
    darkTheme
}
