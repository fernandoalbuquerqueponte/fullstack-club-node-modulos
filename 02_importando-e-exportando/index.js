//importando uma coisa
// const createProduct = require('./product')

//se eu colocar createProduct. ele vai mostrar que eu tenho duas propriedades por isso eu posso fazer um destruting
const { Product, createProduct, productPrice } = require('./product')

require("./hello") //importar um arquivo de modo que oq está dentro dele esteja executado

const product = createProduct(1, "Mac Air", productPrice)

const product2 = new Product(2, "Iphone", "R$ 5.000,00")

console.log(product.getInfo());
console.log(product2.getInfo());


module.exports = {
  sayMyName: () => console.log("FERNANDO ALBUQUERQUE"),
}