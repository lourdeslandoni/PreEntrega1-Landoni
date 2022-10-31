import './NavBar.css';
import MLSLogo from '../../MLSLogo.png';
import Button from '@mui/material/Button';
import React, {useContext} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB9B9',
    },
    secondary: {
      main: '#FFE1E1',
    },
  },
});

function NavBar() {

  const { cart } = useContext(CartContext)

  const contar = () => {
    let count = 0;
    for(let i=0; i<cart.length;i++) {
        count = count + cart[i].itemCount
    }
    return count
  }

    return (
      <ThemeProvider theme={theme}>
      <header className="NavBar">
        <ul className="StoreList">
          <Link to={'/'}><img src={MLSLogo} alt="logo"/></Link>
          <div className="buttonsContainer">
            <Link to={'/'} className="CategoryName"><Button color="primary" variant="contained">Inicio</Button></Link>
            <Link to={'/category/cartucheras'} className="CategoryName"><Button color="primary" variant="contained">Cartucheras</Button></Link>
            <Link to={'/category/Lapices'} className="CategoryName"><Button color="primary" variant="contained">Lapices</Button></Link>
            <Link to={'/category/Tijeras'} className="CategoryName"><Button color="primary" variant="contained">Tijeras</Button></Link>
          </div>
          <div className="CarritoContainer">
          <Link to={'/cart'}>
            <Badge color="primary" badgeContent={contar()} >
              {/* <Badge color="secondary" badgeContent={countProducts(cart)} > */}
                <ShoppingCartIcon color="secondary" />
            </Badge>
          </Link> 
          <Button color="secondary" variant="contained">Login</Button>
          </div>  
        </ul>
      </header>
      </ThemeProvider>
    );
  }
  
  export default NavBar;