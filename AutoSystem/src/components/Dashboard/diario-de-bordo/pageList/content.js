import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Viagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchViagens();
    }, []);

    const fetchViagens = async () => {
        try {
            const response = await axios.get('http://localhost:3000/viagens');
            setViagens(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao obter viagens:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/viagens/${id}`);
            fetchViagens(); // Atualiza a lista após deletar
        } catch (error) {
            console.error('Erro ao excluir viagem:', error);
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
                                <th>Data da Viagem</th>
                                <th>Destino</th>
                                <th>Combustível</th>
                                <th>Velocidade Média</th>
                                <th>Propósito</th>
                                <th>Quilometragem</th>
                                <th>Tempo de Viagem</th>
                                <th>Observações</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {viagens.map((viagem) => (
                                <tr key={viagem.id}>
                                    <td>{viagem.id}</td>
                                    <td>{viagem.dataViagem}</td>
                                    <td>{viagem.destino}</td>
                                    <td>{viagem.combustivel}</td>
                                    <td>{viagem.velocidadeMedia}</td>
                                    <td>{viagem.proposito}</td>
                                    <td>{viagem.quilometragem}</td>
                                    <td>{viagem.tempoDeViagem}</td>
                                    <td>{viagem.obs}</td>
                                    <td>
                                        <Link to={`/atualizarviagem/${viagem.id}`}>
                                            <button>Editar</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(viagem.id)}>Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="acoes">
                                         <div >
                                        <Link to="/novoabastecimento">
                                            <button>Adicionar Abastecimento</button>
                                        </Link>
                                        <Link to="/dashboard">
                                            <button>Voltar ao Dashboard</button>
                                        </Link>
                                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Viagens;
