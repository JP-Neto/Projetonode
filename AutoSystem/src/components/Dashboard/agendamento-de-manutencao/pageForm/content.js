import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';


function MaintenanceForm({ isEdit, id }) {
    const initialFormData = {
        dataDaManutencao: '',
        quilometragem: '',
        manutencao: '',
        manutencao_obs: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        if (isEdit) {
            fetch(`http://localhost:3000/manutencao/${id}`)
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

        if (isEdit) {
            fetch(`http://localhost:3000/manutencao/${id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar o formulário");
                }
                return response.json();
            })
            .then(data => {
                console.log("Resposta do servidor:", data);
                setShowConfirmation(true);
                navigate('/manutencoes');
            })
            .catch(error => {
                console.error("error:", error);
            });
        } else {
            fetch("http://localhost:3000/manutencoes", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar o formulário");
                }
                return response.json();
            })
            .then(data => {
                console.log("Resposta do servidor:", data);
                setShowConfirmation(true);
                navigate('/manutencoes');
            })
            .catch(error => {
                console.error("Erro:", error);
            });
        }
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
                    <span htmlFor="data_da_manutencao">Data da manutenção</span>
                    <input type="text" id="data_da_manutencao" name="dataDaManutencao" value={formData.dataDaManutencao} className="u-full-width data-calendar" placeholder="Insira uma data" onChange={handleChange} />
                    <span htmlFor="quilometragem">Quilometragem</span>
                    <input type="text" id="quilometragem" name="quilometragem" value={formData.quilometragem} className="u-full-width" placeholder="Insira uma Quilometragem" onChange={handleChange} />
                    <span htmlFor="manutencoes">Manutenção</span>
                    <input type="text" id="manutencao" name="manutencao" value={formData.manutencao} className="u-full-width" placeholder="Insira o tipo de manutenção" onChange={handleChange} />
                    <span htmlFor="observacoes">Observações</span>
                    <textarea id="observacoes" name="manutencao_obs" value={formData.manutencao_obs} className="u-full-width" placeholder="Insira observações" onChange={handleChange}></textarea>
                    <input type="submit" className="action-button-page button-primary size-full" value={isEdit ? "Atualizar" : "Enviar"} />
                </div>
                <div className="six columns"></div>
            </form>
            </div>
        </div>
    );
}

export default MaintenanceForm;
