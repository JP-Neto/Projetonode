import React from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';
import carrinho from '../../img/carrinho.png';
import { Link } from 'react-router-dom';

const CardDiarioDeBordo = () => {
  return <div className='card1'>
    <img src={carrinho} alt="Descrição da imagem" width={85} />
    <h5 className='tcard'>Viagens</h5>
    <p className='pcard'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et arcu mauris. Ut vehicula.
    </p>
    <Link to="/viagens">
      <button className='button-primary'>Acessar Viagens</button>
    </Link>
  </div>  
}


  export default CardDiarioDeBordo

 