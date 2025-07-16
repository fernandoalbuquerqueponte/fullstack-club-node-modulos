class Product {
  constructor(id, name, price) {
    this.name = name
    this.id = id
    this.price = price
  }

  getInfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`
  }
}

function createProduct(id, name, price) {
  return new Product(id, name, price)
}

//oq eu quero exportar
// module.exports = createProduct; //essa função é um modulo a gente pode importar ela no index.js por exemplo

const productPrice = 59090 //posso exportar variável támbem

//exportar mais de uma coisa
module.exports = {
  createProduct,
  Product,
  productPrice
}