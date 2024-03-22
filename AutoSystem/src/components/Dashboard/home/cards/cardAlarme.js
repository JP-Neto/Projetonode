import React from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';
import clocks from '../../img/clock.png';

const CardAlarme = () => {
  return <div className='card1'>
    <img src={clocks} alt="Descri��o da imagem" width={85} />
    <h5 className='tcard'>Em Breve..</h5>
    <p className='pcard'>
      Novas funções chegando para impulsionar seu negócio. Aguarde por recursos que vão simplificar ainda mais a gestão operacional.
    </p>
    <button className='button-primary'>Acessar Em Breve..  </button>
  </div>  
}


  export default CardAlarme

