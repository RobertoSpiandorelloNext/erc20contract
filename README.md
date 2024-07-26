# Football Club Token

## Visão Geral

O projeto **Football Club Token** é um contrato inteligente para gerenciar um token de clube de futebol. Ele permite a administração de pontos e recompensas, além de realizar transferências de tokens com descrições. O projeto inclui os seguintes arquivos principais:

- **Contrato Solidity (`.sol`)**: Define a lógica e as funcionalidades do contrato inteligente.
- **Arquivo ABI (`ABI`)**: Interface usada para interagir com o contrato inteligente.

## Estrutura do Projeto

- **`contracts/FootballClubToken.sol`**: Código fonte do contrato inteligente.
- **`abi/FootballClubTokenABI.json`**: Arquivo ABI do contrato, usado para interagir com o contrato.

## Funcionalidades do Contrato

O contrato **FootballClubToken** possui as seguintes funcionalidades:

- **Padrão ERC20**: Implementa o padrão de token ERC20.
- **Gestão de Pontos e Recompensas**: Permite ao proprietário adicionar pontos e recompensas aos membros.
- **Transferência com Descrição**: Realiza transferências de tokens com uma descrição opcional.

## Importância dos Arquivos

- **Arquivo `.sol`**: Contém o código do contrato inteligente. Este arquivo define as regras e operações que o contrato executa na blockchain.
- **Arquivo ABI**: É uma representação JSON da interface do contrato. A ABI é essencial para interagir com o contrato inteligente, pois fornece detalhes sobre as funções e eventos do contrato.

## Como Implantar o Contrato

### Pré-requisitos

1. **Node.js** e **Hardhat** instalados. Caso ainda não tenha, instale-os com:
   ```bash
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox ethers
