export class Book {
  constructor(name, description, author, price, pages) {
    this.name = name;
    this.description = description;
    this.author = author;
    this.price = price;
    this.pages = pages;
  }

  getName() {
    return this.name
  }

  getDescription() {
    return this.description
  }

  renderCard() {
   return `<div class="user">
        <h1>${this.getName()}</h1>
        <h2>${this.getDescription()} ${this.author}</h2>
        <div">Strony : ${this.pages} Cena: ${this.price}zł</div>
    </div>`
  }
}