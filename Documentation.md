# Documentação do Projeto Auto System

## Introdução
Este projeto, construído com React e Firebase SDK, implementa um sistema para autenticação de usuários e gerenciamento de imagens. As principais funcionalidades incluem o cadastro e login de usuários, além da adição e atualização de fotos de perfil.

## Configuração do Projeto
Para configurar este projeto, você precisará de uma conta no Firebase e configurar um novo projeto com autenticação, Realtime Database e Storage. Utilize o arquivo `initService.js` para configurar suas credenciais do Firebase.

## Funcionalidades

### Autenticação de Usuários
O sistema de autenticação permite o registro e login de usuários usando e-mail e senha, além de suporte para login com o Google.

#### Implementação:
- **AuthService.js**: Contém funções para registrar, logar e logar com Google.
- **Cadastro.js & Login.js**: Componentes React para interfaces de cadastro e login.

### Criação das Páginas de Login e Cadastro
As páginas de Login e Cadastro foram desenvolvidas usando React, com formulários interativos para coletar informações do usuário.

#### Implementação:
- **Cadastro.js**: Interface para novos usuários se cadastrarem, incluindo campos para nome, e-mail e senha.
- **Login.js**: Interface para login dos usuários, com opções para entrar com e-mail e senha ou através da conta do Google.

### Gerenciamento de Imagens
Os usuários podem adicionar ou atualizar suas fotos de perfil, que são armazenadas no Firebase Storage e referenciadas no Firebase Realtime Database.

#### Implementação:
- **UploadService.js**: Função `uploadImage` para realizar o upload de imagens para o Firebase Storage.
- **DatabaseService.js**: Contém a função `updateUserPhotoURL` para atualizar a URL da foto do usuário no Firebase Realtime Database.

## Desafios e Soluções

### Configurações de Regras do Firebase
Enfrentamos desafios com as regras de segurança do Firebase, especialmente no controle de acesso aos dados dos usuários.
- **Solução**: Revisão detalhada das regras de segurança do Firebase Database e Storage para garantir acesso adequado.

### Função de Adicionar Nova Imagem
Integrar o upload de imagens com o armazenamento e recuperação de dados apresentou desafios.
- **Solução**: Implementação de funções assíncronas para garantir o correto carregamento e armazenamento da URL da imagem.

## Conclusão
Este projeto demonstra a implementação eficaz de um sistema de autenticação de usuários e gerenciamento de imagens usando React e Firebase. As funcionalidades de cadastro, login e gerenciamento de imagens estão bem integradas, e os desafios encontrados foram superados com soluções práticas e eficientes.
