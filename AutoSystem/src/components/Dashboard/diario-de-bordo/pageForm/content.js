import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';

function MaintenanceForm({ isEdit, id }) {
	
    const initialFormData = {
        dataViagem: '',
        destino: '',
        combustivel: '',
        velocidadeMedia: '',
        proposito: '',
        quilometragem: '',
        tempoDeViagem: '',
        obs: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        if (isEdit) {
            fetch(`http://localhost:3000/viagens/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar dados para edição');
                    }
                    return response.json();
                })
                .then(data => {
                    setFormData(data);
                })
                .catch(error => console.error("Erro ao carregar dados para edição:", error));
        }
    }, [isEdit, id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = isEdit ? `http://localhost:3000/viagens/${id}` : 'http://localhost:3000/viagens';
        const method = isEdit ? 'PUT' : 'POST';

        fetch(url, {
            method,
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(isEdit ? "Erro ao atualizar o formulário" : "Erro ao enviar o formulário");
            }
            return response.json();
        })
        .then(data => {
            setShowConfirmation(true);
            navigate('/viagens');
        })
        .catch(error => {
            console.error("Erro:", error);
            console.error("Stack trace:", error.stack);
        });
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    return (
        <div className="content-page">
            {showConfirmation && <div className="confirmation-message">Formulário enviado com sucesso!</div>}
            <div className='row'>
                <form onSubmit={handleSubmit}>
                    <div className="six columns">
                        <span htmlFor="data_do_abastecimento">Data da viagem</span>
                        <input type="date" id="dataViagem" name="dataViagem" value={formData.dataViagem} className="u-full-width data-calendar"  onChange={handleChange} />
                        <span htmlFor="destino">Destino</span>
                        <input type="text" id="destino" name="destino" value={formData.destino} className="u-full-width" placeholder="Insira o destino"  onChange={handleChange} />
                        <span htmlFor="combustivel_gasto">Combustível gasto</span>
                        <input type="text" id="combustivel_gasto" name="combustivel" value={formData.combustivel} className="u-full-width" placeholder="Insira o combustível gasto" onChange={handleChange} />
                        <span htmlFor="velocidade_media">Velocidade média</span>
                        <input type="text" id="velocidade_media" name="velocidadeMedia" value={formData.velocidadeMedia} className="u-full-width" placeholder="Insira a velocidade média" onChange={handleChange} />
                        <span htmlFor="proposito">Propósito</span>
                        <input type="text" id="proposito" name="proposito" value={formData.proposito} className="u-full-width" placeholder="Insira o propósito" onChange={handleChange} />
                    </div>
                    <div className="six columns">
                        <span htmlFor="quilometragem">Quilometragem</span>
                        <input type="text" id="quilometragem" name="quilometragem" value={formData.quilometragem} className="u-full-width" placeholder="Insira a quilometragem" onChange={handleChange} />
                        <span htmlFor="tempo_de_viagem">Tempo de viagem</span>
                        <input type="text" id="tempo_de_viagem" name="tempoDeViagem" value={formData.tempoDeViagem} className="u-full-width" placeholder="Insira o tempo de viagem" onChange={handleChange} />
                        <span htmlFor="observacoes">Observações</span>
                        <textarea id="observacoes" name="obs" value={formData.obs} className="u-full-width" placeholder="Insira observações" onChange={handleChange}></textarea>
                        <input type="submit" className="action-button-page button-primary size-full" value={isEdit ? "Atualizar" : "Enviar"} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MaintenanceForm;
