import React from 'react';
import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';
//import carrinho from './carrinho.png';

import { useParams } from 'react-router-dom';
import HeaderHigh from './headerHigh.js';
import HighTitlePage from './highTitlePage.js';
import ContentPage from './content.js';


const HighMainAgendamentoManutencao = () => {
    const { id } = useParams();

    return <div className="container-fluid high-main">
           <HeaderHigh />
           <HighTitlePage /> 
           <ContentPage isEdit={!!id} id={id} />           
    </div>
}
export default HighMainAgendamentoManutencao