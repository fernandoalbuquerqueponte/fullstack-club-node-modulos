const fs = require("fs")
const path = require("path");

//criar uma pasta em um diretório
// fs.mkdir("./new_folder", () => { }) //resultado ia ser o mesmo
fs.mkdir(path.join(__dirname, "new_folder"), () => { }) //cria pasta new_folder no meu diretório atual

//criar um arquivo dentro dessa pasta "new_folder"
fs.writeFile(path.join(__dirname, "new_folder", 'new-file.txt'), "Conteudo do arquivo...", () => { });

//adicionar um conteúdo ao arquivo
fs.appendFile(path.join(__dirname, "new_folder", 'new-file.txt'), "123", () => { });

//ler o conteúdo de um arquivo
let fileContent = ''

fs.readFile(path.join(__dirname, "new_folder", "new-file.txt"), "utf-8", (err, data) => {
  fileContent = data;
  console.log(data); //conteúdo do arquivo
  console.log("conteudo do arquiovo é", fileContent);
})
