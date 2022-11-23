const quotes = [
  {
    quote: "a",
    author: "aa",
  },
  {
    quote: "b",
    author: "bb",
  },
  {
    quote: "c",
    author: "cc",
  },
  {
    quote: "d",
    author: "dd",
  },
  {
    quote: "e",
    author: "ee",
  },
  {
    quote: "f",
    author: "ff",
  },
  {
    quote: "g",
    author: "gg",
  },
  {
    quote: "h",
    author: "hh",
  },
  {
    quote: "i",
    author: "ii",
  },
  {
    quote: "j",
    author: "jj",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todayPoint = Math.random() * quotes.length;
const todayQuotes = Math.floor(todayPoint);

quote.innerText = quotes[todayQuotes].quote;
author.innerText = quotes[todayQuotes].author;
