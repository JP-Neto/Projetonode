import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/custom.css';
import { Button } from 'react-bootstrap';
const Abastecimentos = () => {
    const [abastecimentos, setAbastecimentos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAbastecimentos();
    }, []);

    const fetchAbastecimentos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/abastecimentos');
            setAbastecimentos(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao obter abastecimentos:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/abastecimentos/${id}`);
            fetchAbastecimentos(); // Atualiza a lista após deletar
        } catch (error) {
            console.error('Erro ao excluir abastecimento:', error);
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
                               
                                <th>Data</th>
                                <th>Valor </th>
                                <th>Quilometragem</th>
                                <th>Posto</th>
                                <th>Endereço</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {abastecimentos.map((abastecimento) => (
                                <tr key={abastecimento.id}>
                                   
                                    <td>{abastecimento.dataDaManutencao}</td>
                                    <td>{abastecimento.valorAbastecimento}</td>
                                    <td>{abastecimento.qmAtual}</td>
                                    <td>{abastecimento.posto}</td>
                                    <td>{abastecimento.endereco}</td>
                                    <td>
                                        <Link to={`/abastecimentos/${abastecimento.id}`}>
                                            <button className='button-edit'>Editar</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Button className='button-exclude' onClick={() => handleDelete(abastecimento.id)}>Excluir</Button>
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

export default Abastecimentos;
