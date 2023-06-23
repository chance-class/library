//let addBtn = document.getElementById("add-btn");
//addBtn.addEventListener("click", () => {
//  document.getElementById("form-popup").style.display = "block";
//});

function openForm() {
  document.getElementById("form-popup").style.display = "block";
  document.addEventListener("click", (e) => {
      if ( !(document.getElementById("add-btn").contains(e.target))) {
        document.getElementById("form-popup").style.display = "none";
      }
  });
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

const container = document.querySelector(".container");

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    let books = document.querySelectorAll('.card');
      for (const item of books) {
        item.remove();
      }
    for (const book of myLibrary) {
      let card = document.createElement("div");
      card.classList.add("card");
      container.appendChild(card);
      let cardTitle = document.createElement("p");
      cardTitle.textContent = `\"${book.title}\"`;
      cardTitle.classList.add("title");
      card.appendChild(cardTitle);
      let cardAuthor = document.createElement("p");
      cardAuthor.textContent = `By ${book.author}`;
      cardAuthor.classList.add("author")
      card.appendChild(cardAuthor);;
      let cardPages = document.createElement("p");
      cardPages.textContent = `${book.pages} pages`;
      cardPages.classList.add("pages");
      card.appendChild(cardPages);
      let cardRead = document.createElement("button");
      cardRead.classList.add("read-btn");
      if (book.read === "no") {
        cardRead.textContent = "Not Read";
        cardRead.classList.add("btn-not-read");
      } else if (book.read === "yes") {
        cardRead.textContent = "Read";
        cardRead.classList.add("btn-read");
      } else {
        cardRead.textContent = "Error";
      }
      cardRead.addEventListener("click", () => {
        if (cardRead.textContent === "Read") {
          cardRead.textContent = "Not Read";
          cardRead.classList.remove("btn-read");
          cardRead.classList.add("btn-not-read");
        } else {
          cardRead.textContent = "Read";
          cardRead.classList.remove("btn-not-read");
          cardRead.classList.add("btn-read")
        }
      });
      card.appendChild(cardRead);
      let removeBtn = document.createElement("button");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "Remove";
      card.appendChild(removeBtn);
      removeBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        let location = myLibrary.indexOf(book);
        myLibrary.splice(`${location}`, 1);
      });
    };
   
  }
  
  

  let form = document.querySelector(".form-container");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector('input[name="read"]:checked').value;
    if (title === "" || author === "" || pages === "") {
      alert("Please fill out all fields.");
      return;
    } else {
    addBookToLibrary(title, author, pages, read);
    document.getElementById("form-popup").style.display = "none";
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    }
  });