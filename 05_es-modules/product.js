export class Product {
  constructor(id, name, price) {
    this.name = name
    this.id = id
    this.price = price
  }

  getInfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`
  }
}

export function createProduct(id, name, price) {
  return new Product(id, name, price)
}

const productPrice = 59090;

export default productPrice;

//jeito antigo de exportar:
//exportar mais de uma coisa (COMMON-JS)
// module.exports = {
//   createProduct,
//   Product,
//   productPrice
// }