import './Navbar.css'

import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'


const Navbar = () => {
  return (
    <nav>
      <div>        
        <img src={logo} />
      </div>
      <div>
        <button>Cartucheras</button>
        <button>Agendas 2022</button>
        <button>Combos Especiales del Mes</button>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
