# Documentação do Projeto Auto System

## Introdução

O projeto Auto System é uma aplicação desenvolvida utilizando node.js, React, SQLite e Firebase SDK. Ele visa oferecer um sistema abrangente que engloba autenticação de usuários, gerenciamento de imagens e dados relacionados à manutenção e gastos do veículo. Suas principais funcionalidades incluem o cadastro e login de usuários, controle de gastos com viagens, manutenções e abastecimentos do veículo. O design da interface do usuário foi pensado para ser simples e intuitivo, semelhante a outras experiências de software. Para atender a esses requisitos, optamos por uma abordagem minimalista, com telas de acesso direto por meio de links e formulários básicos, mas funcionais. No desenvolvimento do front-end, utilizamos React em conjunto com o framework CSS Skeleton, escolhido por sua simplicidade e alinhamento com os objetivos do projeto. Embora tenha sido uma escolha que demandou um período de aprendizado, a implementação desses recursos adicionou um peso considerável ao projeto.

## Ferramentas Utilizadas

- Figma: para prototipação.
- Gimp: para criação de imagens.
- Inkscape: para criação vetorial.
- Vscode: para desenvolvimento tanto do back-end quanto do front-end.

## Configuração do Projeto

Para configurar o projeto, é necessário ter uma conta no Firebase e criar um novo projeto com autenticação, Realtime Database e Storage. As credenciais do Firebase devem ser configuradas no arquivo `initService.js`. Já o SQLite é criado em tempo de execução e não requer nenhuma configuração adicional.

## Funcionalidades

### Autenticação de Usuários

O sistema de autenticação permite o registro e login de usuários utilizando e-mail e senha, além de oferecer suporte para login com o Google.

### Diário de Bordo

Exibe um relatório das últimas viagens realizadas pelo condutor, incluindo dados relacionados. Em futuras atualizações, está previsto o comparativo entre viagens, indicando diferenças de gastos em viagens repetidas.

### Controle de Abastecimento

Oferece um controle básico para a gestão de abastecimentos do veículo, incluindo locais de abastecimento e média de consumo entre abastecimentos.

### Controle de Manutenções

Permite o registro de peças e serviços realizados no veículo, fornecendo um relatório com despesas e gastos relacionados.

## Implementação

- `AuthService.js`: Contém funções para registrar, logar e logar com Google.
- `Cadastro.js` & `Login.js`: Componentes React para interfaces de cadastro e login.
- **Criação das Páginas de Login e Cadastro:** As páginas de Login e Cadastro foram desenvolvidas usando React, com formulários interativos para coletar informações do usuário. Os dados são armazenados no SQLite, um banco de dados leve e de fácil manipulação. Em futuras atualizações, está prevista uma integração mais complexa entre as tabelas para exibição de dados e relatórios mais precisos.
 

## Desafios e Soluções

- **Configurações de Regras do Firebase:** Enfrentamos desafios com as regras de segurança do Firebase, especialmente no controle de acesso aos dados dos usuários. A solução envolveu uma revisão detalhada das regras de segurança do Firebase Database e Storage para garantir acesso adequado.
- **Função de Adicionar Nova Imagem:** Integrar o upload de imagens com o armazenamento e recuperação de dados apresentou desafios. A solução foi implementar funções assíncronas para garantir o correto carregamento e armazenamento da URL da imagem.

## Conclusão

O projeto Auto System demonstra uma implementação eficaz de um sistema de autenticação de usuários e gerenciamento de imagens utilizando node.js, React e Firebase. As funcionalidades de CRUD, login e gerenciamento de imagens estão bem integradas. Embora tenhamos enfrentado alguns desafios, especialmente na parte visual para membros do grupo com menos experiência nas tecnologias utilizadas, consideramos o projeto um sucesso, superando contratempos com soluções práticas e eficientes.
