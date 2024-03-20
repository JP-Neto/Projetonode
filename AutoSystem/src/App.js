import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HighMainHome from './components/Dashboard/home/highMain.js';
import Cadastro from './components/auth/Cadastro.js';
import Login from './components/auth/Login.js';

import Viagens from './components/Dashboard/diario-de-bordo/pageList/highMain.js';
import HighMainDiarioDeBordo from './components/Dashboard/diario-de-bordo/pageForm/highMain.js';


import Abastecimentos from './components/Dashboard/abastecimentoPages/pageList/highMain.js';
import HighMainControleDeAbastecimento from './components/Dashboard/abastecimentoPages/pageForm/highMain.js';

import Manutencoes from './components/Dashboard/agendamento-de-manutencao/pageList/highMain.js';
import HighMainAgendamentoManutencao from './components/Dashboard/agendamento-de-manutencao/pageForm/highMain.js'




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/dashboard" element={<HighMainHome />} />

          <Route path="/viagens" element={<Viagens />} />
          <Route path="/adicionarviagem" element={<HighMainDiarioDeBordo />} />
          <Route path="/atualizarviagem/:id" element={<HighMainDiarioDeBordo />} />

          <Route path="/abastecimentos" element={<Abastecimentos />} />
          <Route path="/abastecimentos/:id" element={<HighMainControleDeAbastecimento />} />
          <Route path="/novoabastecimento" element={<HighMainControleDeAbastecimento />} />


          <Route path="/manutencoes" element={<Manutencoes />} />
          <Route path="/adicionarmanutencao" element={<HighMainAgendamentoManutencao/>} />
          <Route path="/manutencao/:id" element={<HighMainAgendamentoManutencao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
