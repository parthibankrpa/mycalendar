import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#54b800',
    },
    secondary: {
      main: '#06a5a4',
    },
    error: {
      main: red.A400,
    },
    backgroundColor: {
      default: '#ebeef1',
    },
    text:{
      primary:'#414446',
      secondary:'#838486'
    }
  },
});

export default theme;
