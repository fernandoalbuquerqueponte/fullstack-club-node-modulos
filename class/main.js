//as classes do javascript são empressoras de objetos, a gente consegue definir uma entidade ex: pessoa e imprimir objeto dessa entidade

class Person {
  //oq essa person vai ter de propriedades
  constructor(firstName, lastName, age) {
    //assinalar essas propriedades a person
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //A gente pode criar métodos para essa classe
  //vamos criar um método que junta o nome completo que junta o firstName com lastName
  getFullName() {
    //esse getFullName usa o firstName e o lastName então a classe precisa ser instanciada pra gente assinalar o firstName pra alguma coisa
    console.log(`${this.firstName} ${this.lastName}`);
  }

  //a gente adiciona o static
  static speak() {
    //método é estático é quando um método não precisa ser insntanciado tipo person = new Person()
    //esse speak pode ser estático por que ele não usa nenhum dado da pessoa
    console.log("Hello world");
  }
}

// a gente consegue instanciar essa person usando a keyword new

//o constructor é iniciado sempre que a função é instanciada assim dessa forma
const person = new Person("Fernando", "Albuquerque", 22);

// person.speak() //antes de colocar o static 

Person.speak() //agora