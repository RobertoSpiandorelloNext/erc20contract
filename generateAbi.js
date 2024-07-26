const fs = require("fs");
const path = require("path");

async function main() {
  // Caminho para o JSON compilado do contrato
  const contractPath = path.join(
    __dirname,
    "artifacts",
    "contracts",
    "FootballClubToken.sol",
    "FootballClubToken.json"
  );

  // Leia o JSON compilado
  const contractJson = JSON.parse(fs.readFileSync(contractPath, "utf8"));

  // Extraia o ABI
  const abi = contractJson.abi;

  // Escreva o ABI em um arquivo
  const abiPath = path.join(__dirname, "FootballClubTokenABI.json");
  fs.writeFileSync(abiPath, JSON.stringify(abi, null, 2));

  console.log("ABI salvo em FootballClubTokenABI.json");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
