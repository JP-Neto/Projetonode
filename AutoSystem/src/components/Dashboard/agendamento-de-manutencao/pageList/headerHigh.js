import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutosystemLogo from '../../img/autosystem.png'

import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';
//import carrinho from './carrinho.png';

const HeaderHigh = () => {
    return <div className="header-high ">
        <div className='header-content'>
        <div className='brand'>
                  <Button variant="outline-primary" className="autosystem-button">
                    <Link to="/dashboard">
                      <img src={AutosystemLogo} alt="Auto System" />
                    </Link>
                  </Button>
                  </div>
                  <div className="user-actions">
                          <Link to="/"><button className='button-user'>Desconectar</button></Link>
                        </div>
            
        </div>
      
    </div>
}
export default HeaderHigh