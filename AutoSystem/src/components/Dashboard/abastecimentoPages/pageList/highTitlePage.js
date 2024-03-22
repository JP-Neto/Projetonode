import React from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';
import { Link } from 'react-router-dom';
//import carrinho from './carrinho.png';

const HighTitlePage = () => {
    return <div className="header-page">
        <div className="content-header-page">
            <div className='title-page'><strong>| Controle de abastecimento | </strong></div>
            <div className='navegation-title'>
                <Link to="/novoabastecimento">
                    <button className='button-primary'>Adicionar Abastecimento</button>
                </Link>
                <Link to="/dashboard">
                    <button className='action-button button-cancel'>Voltar ao Dashboard</button>
                </Link>
            </div>
        </div>
    </div>
}
export default HighTitlePage