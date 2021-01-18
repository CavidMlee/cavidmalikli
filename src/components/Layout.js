import React,{ useState,useContext } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Switch from '@material-ui/core/Switch';
import { ThemeContext } from 'src/contexts'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Layout = ({ children }) => {

    const { dark, setDark } = useContext(ThemeContext)

    const classes = useStyles();

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Switch checked={dark} onChange={()=>setDark(!dark)} inputProps={{ 'aria-label': 'primary checkbox' }} />
                </Toolbar>
            </AppBar>
            <div>{children}</div>
            <span>footer</span>

        </Container>
    )
}

