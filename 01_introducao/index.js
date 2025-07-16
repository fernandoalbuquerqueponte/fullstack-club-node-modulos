//importando o módulo fs = responsavel por manipular arquivos 
const fs = require('fs')

//criar um arquivo
fs.writeFile('myFile.txt', "Fernando albuquerque", () => { }) //nome arquivo, oq eu quero colocar dentro do arquivo,função

//rodar node 01_introducao/index.js