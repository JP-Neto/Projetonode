import React from 'react';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/custom.css';

//import carrinho from './carrinho.png';
import HeaderHigh from './headerHigh.js';
import HighTitlePage from './highTitlePage.js';
import ContentPage from './content.js';
import { Link } from 'react-router-dom';

const HighMainHome = () => {
    return <div className="container-fluid high-main">
           <HeaderHigh />
           <HighTitlePage /> 
           <ContentPage />
        
    </div>
}
export default HighMainHome