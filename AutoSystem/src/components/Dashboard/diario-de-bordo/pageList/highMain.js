import React from 'react';
import { useParams } from 'react-router-dom';

import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';

import HeaderHigh from './headerHigh.js';
import HighTitlePage from './highTitlePage.js';
import ContentPage from './content.js';
 
 
 
const HighMainDiarioDeBordo = () => {
    const { id } = useParams();
  
    return <div className="container-fluid high-main">
           <HeaderHigh />
           <HighTitlePage /> 
           <ContentPage/>        
    </div>
}
export default HighMainDiarioDeBordo