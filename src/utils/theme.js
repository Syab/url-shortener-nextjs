import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e82c90',
        },
        secondary: {
            main: '#edb019',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'rgb(230,235,238)',
        },
    },
});

export default theme;