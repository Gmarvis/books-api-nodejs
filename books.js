let { v4: uuid } = require("uuid");

let allBooks = [
  {
    id: uuid(),
    title: "think and grow rich",
    author: "Napoleon Hills",
    category: "persnal development",
  },
  {
    id: uuid(),
    title: "Change your thoughts change your life",
    author: "Brian Tracy",
    category: "persnal development",
  },
  {
    id: uuid(),
    title: "eat the frog",
    author: "Brian Tracy",
    category: "persnal development",
  },
  {
    id: uuid(),
    title: "Speak like a genus",
    author: "Napoleon Hills",
    category: "persnal development",
  },
  {
    id: uuid(),
    title: "riches man in the babilon",
    author: "Napoleon Hills",
    category: "persnal development",
  },
  {
    id: uuid(),
    title: "You Are a Badass",
    author: "Jen Sincero",
    category: "persnal development",
  },
];

module.exports = allBooks;
