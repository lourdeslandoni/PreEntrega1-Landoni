import './Footer.css';
import MLSLogo from '../../MLSLogo.png';
import Button from '@mui/material/Button';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB9B9',
    },
    secondary: {
      main: '#FFB9B9',
    },
  },
});

function Footer() {
    return (
      <ThemeProvider theme={theme}>
      <footer className="Footer">
        <ul className="StoreList">
          <Link to={'/'}><img src={MLSLogo} alt="Store Inc. logo"/></Link>
          <div className="buttonsContainer">
            <Link to={'/contact'} className="CategoryName"><Button color="primary" variant="contained">Contáctanos</Button></Link>
          </div>
          <div id="copyright">Copyright 2022 Lourdes Landoni</div>
        </ul>
      </footer>
      </ThemeProvider>
    );
  }
  
  export default Footer;