import React from "react";
// import "./Book.css";

const BookCard = ({ books = [] }) => {
  return (
    <>
      <h1 className="book">Entered Books List</h1>
      <div className="card">
        {books.length === 0 ? (
          <p> No Book is entered </p>
        ) : (
          books.map((book, index) => (
            <div key={index}>
              <h2 className="book">{book.title}</h2>
              <h2>Rs {book.price}</h2>
              <p>{book.description}</p>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BookCard;
