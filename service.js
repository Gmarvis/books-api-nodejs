const bodyParser = require("body-parser");
const express = require("express");
let { v4: uuid } = require("uuid");

let allBooks = require("./books");

// console.log(allBooks);

let app = express();

// callbacks
let getBooks = (req, res) => {
  res.json(allBooks);
};
let selectedBook = (req, res) => {
  let { id } = req.params;
  // console.log(id)
  let bookSelected = allBooks.find((book) => {
    return (book.id = id);
  });
  res.json(bookSelected);
};
let addBook = (req, res) => {
  let id = uuid();
  let bookToAdd = {
    id,
    ...req.body,
  };
  allBooks = [...allBooks, bookToAdd];
  res.json(allBooks);
};
let editBook = (req, res) => {
  let { id } = req.params;
  let editedBook = {
    id,
    ...req.body,
  };

  let books = allBooks.filter((book) => {
    return book.id != id;
  });

  allBooks = [...books, editedBook];
  res.json(allBooks);
  // console.log(bookToEdit)
};

let deleteBook = (req, res) => {
  let { id } = req.params;
  allBooks = allBooks.filter((body)=>{
    return body.id != id
  })
  res.json(allBooks)
};

// maddlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.get("/books", getBooks).get("/books/:id", selectedBook);
app.post("/books/addbook", addBook).post("/books/edit/:id", editBook);
app.delete("/books/delete/:id", deleteBook);

app.listen(4000);
