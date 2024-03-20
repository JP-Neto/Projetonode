import React, { useEffect, useState } from 'react';
import { fetchUserData, updateUserPhotoURL } from '../../../Services/firebase/databaseService.js';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/custom.css';
import { Link } from 'react-router-dom';

//import carrinho from './carrinho.png';

const HeaderHigh = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userData = await fetchUserData(); // Obtendo os dados do usuário
            setUser(userData);
          } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
          }
        };
    
        fetchData();
      }, []);

    return <div className="header-high ">
              <div className='header-content'>
                  <div className='brand'>Auto System</div>
                  <div className='user'>
                      {user ? (
                      <div className="user-profile">
                        <span className="user-name">{user.name}</span>
                        <img src={user.photoURL} alt="User" className="user-image"/>
                        <div className="user-actions">
                          <Link to="/"><button className='button-user'>Desconectar</button></Link>
                        </div>
                      </div>) : ( <span>Carregando...</span>)}
                  </div>
              </div>
          </div>
}
export default HeaderHigh