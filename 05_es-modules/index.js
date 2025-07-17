// const { Product, createProduct, productPrice } = require('./product')
// import productPrice, { Product, createProduct } from './product.js' //importando o default e depois o padrao
import * as productModule from "./product.js" //pega todos os arquivos que estou exportando e joga nessa variável productModule

//importando módulos imcompatíveis com ES Modules
// import loadesh from 'loadash'
// const { filter } = loadesh

//Módulo nátivo do Node
// import path from 'path'

const product = createProduct(1, "Mac Air", productPrice)

const product2 = new Product(2, "Iphone", "R$ 5.000,00")

console.log(product.getInfo());
console.log(product2.getInfo());