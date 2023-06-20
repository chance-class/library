//let addBtn = document.getElementById("add-btn");
//addBtn.addEventListener("click", () => {
//  document.getElementById("form-popup").style.display = "block";
//});

function openForm() {
  document.getElementById("form-popup").style.display = "block";
}

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  }
}

