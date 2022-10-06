import './Navbar.css'
import { Link } from 'react-router-dom';

import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'


const Navbar = () => {
  return (
    <nav>
      <div>        
        <img src={logo} />
      </div>
      <div>
        <Link to={`/category/cartuchera`}>Cartucheras</Link>
        <Link to={`/category/agenda`}>Agendas 2023</Link>
        <Link to={`/category/combo`}>Combos Especiales</Link>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
