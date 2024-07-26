Football Club Token
Visão Geral
O projeto Football Club Token é um contrato inteligente para gerenciar um token de clube de futebol. Ele permite a administração de pontos e recompensas, além de realizar transferências de tokens com descrições. O projeto inclui os seguintes arquivos principais:

Contrato Solidity (.sol): Define a lógica e as funcionalidades do contrato inteligente.
Arquivo ABI (ABI): Interface usada para interagir com o contrato inteligente implantado.
Estrutura do Projeto
contracts/FootballClubToken.sol: Código fonte do contrato inteligente.
abi/FootballClubTokenABI.json: Arquivo ABI do contrato, usado para interagir com o contrato.
Funcionalidades do Contrato
O contrato FootballClubToken possui as seguintes funcionalidades:

Padrão ERC20: Implementa o padrão de token ERC20.
Gestão de Pontos e Recompensas: Permite ao proprietário adicionar pontos e recompensas aos membros.
Transferência com Descrição: Realiza transferências de tokens com uma descrição opcional.
Importância dos Arquivos
Arquivo .sol: Contém o código do contrato inteligente. Este arquivo define as regras e operações que o contrato executa na blockchain.
Arquivo ABI: É uma representação JSON da interface do contrato. A ABI é essencial para interagir com o contrato inteligente, pois fornece detalhes sobre as funções e eventos do contrato.
Como Implantar o Contrato
Pré-requisitos
Node.js e Hardhat instalados. Caso ainda não tenha, instale-os com:
bash
Copy code
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox ethers
Passos para Implantar o Contrato
Compile o Contrato:
Execute o comando a seguir para compilar o contrato Solidity:

bash
Copy code
npx hardhat compile
Crie o Script de Implantação:
Crie um arquivo chamado scripts/deploy.js com o seguinte conteúdo:

javascript
Copy code
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const FootballClubToken = await ethers.getContractFactory("FootballClubToken");
  const token = await FootballClubToken.deploy("Football Club Token", "FCT");

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
Implante o Contrato:
Execute o script de implantação com o comando:

bash
Copy code
npx hardhat run scripts/deploy.js --network <network-name>
Observação
Se você já possui o arquivo ABI e o contrato foi implantado: Não é necessário realizar o deploy novamente. O arquivo ABI pode ser usado para interagir com o contrato já existente na blockchain.
Conclusão
Este projeto fornece uma solução para a gestão de tokens em clubes de futebol. O arquivo .sol define o contrato inteligente e a ABI é usada para interagir com o contrato após a implantação. Siga as etapas descritas para compilar e implantar o contrato, e utilize o ABI para interagir com o contrato implantado.

