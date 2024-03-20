// Importando módulos necessários do React e de outras bibliotecas
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Importando a função registerUser do serviço de autenticação do Firebase
import { registerUser } from '../../Services/firebase/authService.js';
// Importando componentes do React Bootstrap e o arquivo de estilo CSS
import { Form, Button } from 'react-bootstrap';
import './cadastro.css';

// Definição do componente funcional 'Cadastro'
const Cadastro = () => {
  // Definindo o estado inicial para email, senha, nome e erros
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  // Hook para navegar programaticamente entre rotas
  const navigate = useNavigate();

  // Funções para atualizar o estado com os valores dos inputs
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  // Função assíncrona para lidar com o processo de cadastro
  const handleCadastro = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      // Tenta registrar o usuário com email, senha e nome
      await registerUser(email, password, name);
      navigate('/'); // Redireciona para a página inicial após o cadastro bem-sucedido
    } catch (error) {
      // Captura e define qualquer erro ocorrido durante o cadastro
      setError(error.message);
    }
  };

  // Renderização do componente
  return (
    <div className="container">
      <div className="form-container">
        <div className="header">
          <h2>Cadastro de Usuário</h2>
          <span>Preencha o formulário abaixo para criar sua conta</span>
        </div>
        <Form onSubmit={handleCadastro}>
          <div className="inputContainer">
            <label htmlFor="name">Nome de Usuário:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} autoComplete="new-password" />
          </div>
          {/* Exibição condicional da mensagem de erro */}
          {error && <div className="text-danger">{error}</div>}
          <Button variant="primary" type="submit" className="button">
            Cadastrar
          </Button>
        </Form>
        <div className="footer">
          <p>Já tem uma conta? <Link to="/">Faça login aqui</Link>.</p>
        </div>
      </div>
    </div>
  );
};

// Exportando o componente para ser usado em outros arquivos
export default Cadastro;
