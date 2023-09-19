import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_BOOKS_SUCCESS,LOAD_BOOKS_START } from './constants';
import axios from "axios";

const BookListApiCon = () => {
   const dispatch = useDispatch();
   const books = useSelector(state => state.book.apibooks);
  //  const fetchBooksList = () => {
  //   axios
  //     .get('https://mocki.io/v1/abe4ce04-5c37-48d2-ab14-7ed6436e7670')
  //     .then(response => {
  //       const data = response.data;
  //       console.log('in booklist', data);
  //       dispatch({ type: FETCH_BOOKS_SUCCESS, payload: data });
  //       console.log('store', books);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching books:', error);
  //     });
  // };

  const fetchBooksList2 = () => {
    dispatch({type:LOAD_BOOKS_START})
   };
  return (
    <div>
      <h1 className="heading">Books List</h1>
      <button onClick={fetchBooksList2}>FetchBooks</button>

      {books.length === 0 ? (
        <p>Books List is empty</p>
      ) : (
        books.map((book, index) => (
          <div className="card" key={index}>
            <h2>{book.title}</h2>
            <h2>Rs {book.price}</h2>
            <p>{book.description}</p>
            <button>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  )
}

export default BookListApiCon