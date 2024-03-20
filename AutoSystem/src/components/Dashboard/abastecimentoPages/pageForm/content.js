import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import '../../css/normalize.css';
import '../../css/skeleton.css';
import '../../css/custom.css';

function ContentPage({ isEdit, id }) {
    const initialFormData = { 
        dataDaManutencao: '',
        endereco: '',
        posto: '',
        qmAtual: '',
        valorAbastecimento: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
        if (isEdit) {
            fetch(`http://localhost:3000/abastecimentos/${id}`)
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
            fetch(`http://localhost:3000/abastecimentos/${id}`, {
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
                navigate('/abastecimentos');
            })
            .catch(error => {
                console.error("Erro:", error);
            });
        } else {
            fetch("http://localhost:3000/abastecimentos", {
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
                navigate('/abastecimentos');
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
                        <span htmlFor="valor_abastecimento">Valor do abastecimento</span>                       
                        <input type="text" id="valor_abastecimento" name="dataDaManutencao" value={formData.dataDaManutencao}  className="u-full-width" placeholder="Insira um valor" onChange={handleChange} />
                        <span htmlFor="quilometragem">Quilometragem atual</span>                      
                        <input type="text" id="quilometragem" name="qmAtual" value={formData.qmAtual} className="u-full-width" placeholder="Insira uma Quilometragem" onChange={handleChange} />
                        <span htmlFor="posto_de_gasolina">Posto de gasolina</span>                      
                        <input type="text" id="posto_de_gasolina" name="posto" value={formData.posto} className="u-full-width" placeholder="Insira um texto" onChange={handleChange} />
                        <span htmlFor="endereco">Endereço</span>                      
                        <input type="text" id="endereco" name="endereco" value={formData.endereco} className="u-full-width" placeholder="Insira um texto" onChange={handleChange} />
                        <span htmlFor="data_do_abastecimento">Data do abastecimento</span>  <br />                  
                        <input id="data_do_abastecimento" name="valorAbastecimento" value={formData.valorAbastecimento} className="u-full-width data-calendar" type="date" onChange={handleChange} />
                        <input id="" type="submit" className="action-button-page button-primary size-full" value={isEdit ? "Atualizar" : "Enviar"} />
                    </div>
                    <div className="six columns">
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContentPage;
