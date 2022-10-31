import React from 'react';
import Slider from 'infinite-react-carousel';
import './Carrousel.css'
 
const Carrousel = () => (
  <div className="containerCarrousel">
      <Slider dots>
      <div className="divCarrousel">
        <h1 className="sliderTitle">El mejor precio garantizado</h1>
        <img src="/portada1.jpeg" alt="portrait 1"></img>
      </div>
      <div>
          <h1 className="sliderTitle">Productos importados</h1>
          <img src="/portada2.jpeg" alt="portrait 2"></img>
      </div>
      <div>
          <h1 className="sliderTitle">Ofertas todos los días</h1>
          <img src="/portada3.jpeg" alt="portrait 3"></img>
      </div>
    </Slider>
  </div>
  
);

export default Carrousel;