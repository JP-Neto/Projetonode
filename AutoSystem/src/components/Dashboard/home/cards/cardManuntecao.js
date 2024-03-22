import React from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';
import manutencao from '../../img/manutencao.png';
import { Link } from 'react-router-dom';

const CardManutencao = () => {
  return <div className='card1'>
    <img src={manutencao} alt="Descrição da imagem" width={85} />
    <h5 className='tcard'>Manutenção</h5>
    <p className='pcard'>
    Mantenha seus veículos sempre prontos. Programe manutenções, atualize serviços e gerencie históricos com facilidade.
    </p>
    <Link to="/manutencoes">
      <button className='button-primary'>Acessar Manutenções</button>
    </Link>
  </div>  
}


  export default CardManutencao

 