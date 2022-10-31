import './ItemCount.css';
import React, { useState, useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import CartContext from '../../context/cartContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB9B9'
    },
    secondary: {
      main: '#FFB9B9',
    },
  },
});
  
export default function Counter({stock, initial, prod}) {
  const [itemCount] = useState(initial);
  const { cart } = useContext(CartContext);

  const realStockFunc = () => {

    let productCheck = cart.findIndex(x => x.id === prod.id)
  
    if(productCheck !== -1) {
      return itemCount + cart[productCheck].itemCount
    } else {
      return itemCount
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: 30, backgroundColor: '#FFE1E1', margin: "0 50px" ,borderRadius: "0 0 30px 30px"}}>
        <Badge color="primary" badgeContent={realStockFunc()}>
          <ShoppingCartIcon color="primary" />
        </Badge>
      <Link to={`/item/${prod.id}`} className="buttonBuy"><Button sx={{color: "#FFE1E1", fontWeight: 600, ":hover": {
        backgroundColor: '#FFB9B9', color: '#FFB9B9', fontWeight: 800} }} color="secondary" variant="contained">Modificar carrito</Button></Link>
    </div>
    </ThemeProvider>
  );
}