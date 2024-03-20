import React from 'react';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/custom.css';


import CardDiarioDeBordo from './cards/cardDiarioDeBordo.js';
import CardAbastecimento from './cards/cardAbastecimento.js';
import CardManutencao from './cards/cardManuntecao.js';
import CardAlarme from './cards/cardAlarme.js';

function ContentPage() {
  return <div className="content-page ">
    <div className='row'>
      <div class="three columns align-card"><CardDiarioDeBordo /></div>
      <div class="three columns align-card"><CardAbastecimento /></div>
      <div class="three columns align-card"><CardManutencao /></div>
	  <div class="three columns align-card"><CardAlarme /></div>	  
    </div>
  </div>;
}
export default ContentPage