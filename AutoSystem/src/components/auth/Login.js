// Importando React e hooks, assim como componentes do react-router-dom e react-bootstrap
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Importando funções de autenticação do serviço Firebase
import { loginUserWithEmailAndPassword, loginUserWithGoogle, checkRedirectResult } from '../../Services/firebase/authService.js';
import { Form, Button } from 'react-bootstrap';
import './login.css'
import googleIcon from'./google.png'
import AutosystemLogo from './autosystem-logo.png'
// Definindo o componente funcional 'Login'
const Login = () => {
  // Inicialização dos estados para email, senha, erro, e carregamento
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // Hook para navegar programaticamente entre as rotas
  const navigate = useNavigate();

  // useEffect para verificar o resultado de um redirecionamento de autenticação
  useEffect(() => {
    checkRedirectResult(navigate)
      .catch((error) => {
        // Configura uma mensagem de erro, se ocorrer durante o redirecionamento
        setError(error.message);
      });
  }, [navigate]);

  // Funções para atualizar o estado com base nas entradas do usuário
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Função para lidar com o processo de login por email e senha
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativa o estado de carregamento durante o processo de login

    try {
      // Tenta fazer login com email e senha
      await loginUserWithEmailAndPassword(email, password);
      navigate('/dashboard'); // Redireciona para o dashboard após o login
    } catch (error) {
      // Configura uma mensagem de erro em caso de falha no login
      setError(error.message);
    } finally {
      // Finaliza o estado de carregamento após a tentativa de login
      setLoading(false);
    }
  };

  // Função para lidar com o processo de login via Google
  const handleGoogleLogin = async () => {
    setLoading(true); // Ativa o estado de carregamento durante o processo de login

    try {
      // Tenta fazer login com a conta Google
      await loginUserWithGoogle();
    } catch (error) {
      // Configura uma mensagem de erro em caso de falha no login
      setError(error.message);
    } finally {
      // Finaliza o estado de carregamento após a tentativa de login
      setLoading(false);
    }
  };

  const LoadingScreen = () => (
    <div className="loading-screen">
      Carregando...
    </div>
  );

  // Renderização do componente
  return (
    <div className="container">
      {loading && <LoadingScreen />}
      <div className="form-container">
        <div className="header">
          <img src={AutosystemLogo} alt="Auto System" className="autosystem-logo" />
          <span>Entre com sua conta</span>
        </div>
        <Form onSubmit={handleLogin}>
          <div className="inputContainer">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} autoComplete="current-password" />
          </div>
          <Button variant="primary" type="submit" className="button" disabled={loading}>
            {/* Botão exibe 'Carregando...' enquanto o estado de loading for verdadeiro */}
            {loading ? 'Carregando...' : 'Login'}
          </Button>
        </Form>
        <div className="footer">
          <p>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
          </p>
          <Button variant="outline-primary" onClick={handleGoogleLogin} className="google-button" disabled={loading}>
              <img src={googleIcon} alt="Google" className="google-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Exportando o componente para uso em outros arquivos
export default Login;
