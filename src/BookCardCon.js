import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import BookCard from './BookCard';

const BookCardCon = () => {
  const enteredBooks = useSelector((state) => state.book.enteredbooks); // Assuming you have Redux store setup
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(enteredBooks);
  }, [enteredBooks]);

  console.log('bookcardcon', books);

  return (
    <div>
      <BookCard books={books} />
    </div>
  );
};

export default BookCardCon;