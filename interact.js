const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

// Endereço do contrato implantado
const contractAddress = "0xSeuEnderecoDeContrato";

// Caminho para o arquivo ABI
const abiPath = path.join(__dirname, "FootballClubTokenABI.json");
const abi = JSON.parse(fs.readFileSync(abiPath, "utf8"));

// Conexão com o provedor (por exemplo, MetaMask)
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // Altere para o seu provedor
const wallet = new ethers.Wallet("SUA_CHAVE_PRIVADA", provider); // Altere para a sua chave privada
const footballClubToken = new ethers.Contract(contractAddress, abi, wallet);

async function addPoints(memberAddress, points) {
  const tx = await footballClubToken.addPoints(memberAddress, points);
  await tx.wait();
  console.log("Pontos adicionados com sucesso!");
}

// Chame a função addPoints com os parâmetros desejados
addPoints("0xEnderecoDoMembro", 1000).catch((error) => {
  console.error(error);
  process.exit(1);
});
