import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/custom.css';

const Manutencoes = () => {
  const [manutencoes, setManutencoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchManutencoes();
  }, []);

  const fetchManutencoes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/manutencoes');
      setManutencoes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao obter manutenções:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/manutencao/${id}`);
      fetchManutencoes(); // Atualiza a lista após deletar
    } catch (error) {
      console.error('Erro ao excluir manutenção:', error);
    }
  };

  return (
    <div className="content-page table-overflow">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <table className='full'>
            <thead>
              <tr>
                <th>Data da Manutenção</th>
                <th>Quilometragem</th>
                <th>Manutenção</th>
                <th>Obse</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {manutencoes.map((manutencao) => (
                <tr key={manutencao.id}>
                  <td>{manutencao.dataDaManutencao}</td>
                  <td>{manutencao.quilometragem}</td>
                  <td>{manutencao.manutencao}</td>
                  <td>{manutencao.manutencao_obs}</td>
                  <td>
                    <Link to={`/manutencao/${manutencao.id}`}>
                      <button className='form-button button-edit'>Editar</button>
                    </Link>
                  </td>
                  <td>
                    <button className='button-exclude' onClick={() => handleDelete(manutencao.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="acoes">
            <div >
              <Link to="/novoabastecimento">
                <button className='button-primary'>Adicionar Abastecimento</button>
              </Link>
              <Link to="/dashboard">
                <button className='action-button button-cancel'>Voltar ao Dashboard</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manutencoes;
