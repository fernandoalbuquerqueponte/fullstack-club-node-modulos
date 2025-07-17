//*
// O Node.js adiciona alguns "apretechos" para trabalhar com o path
// duas variáveis:
// __filename:"Nome do arquivo que está sendo executado contendo todo o seu diretório" //nome do arquivo junto com seu caminho completo
//, __dirname: "Ele vai ter o caminho completo da pasta que esse arquivo está sendo executado pertence ou seja, a pasta a qual esse path pertence"
// *\\

//importar o módulo path
const path = require("path");
const fs = require("fs")

//pegar o nome de um arquivo
console.log('Nome do arquivo:', path.basename(__filename));

//pegar a extensão de um arquivo
console.log("Entensão do arquivo:", path.extname(__filename));

//criar um arquivo no diretório do arquivo atual
// console.log(path.join(__dirname, "folder", "message.tsx"));
fs.writeFile(path.join(__dirname, "message.txt"), "Welcome to FSC!", () => { });
