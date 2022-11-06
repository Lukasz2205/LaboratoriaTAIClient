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
        <div>${this.getName()}</div>
        <h2>${this.getDescription()} ${this.author}</h2>
        <div">Strony : ${this.pages} Cena: ${this.price}</div>
    </div>`
  }
}