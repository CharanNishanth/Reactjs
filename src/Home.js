import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_BOOK } from './constants';
import { useNavigate } from 'react-router-dom'; // For navigation
//import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const booksInCart = [] // Assuming you have Redux store setup

  const handleAddBook = () => {
    const newBook = { title, price, description };
    dispatch({ type: ADD_BOOK, payload: newBook });
    
    setTitle('');
    setPrice(0);
    setDescription('');

    history('/bookcard'); // Navigate to '/bookcard' route
  };

  const booksNumInCart = booksInCart.length;

  return (
    <main>
      <h1>Welcome to my online bookstore!</h1>
      <section>
        <h2>Add new book</h2>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label htmlFor="description">Description</label>
        <textarea rows="3" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div>
          <button onClick={handleAddBook}>add book</button>
        </div>
      </section>
      <section>
        <h2>Shopping Cart</h2>
        <div>Total Number of Books: {booksNumInCart}</div>
        {booksInCart.length === 0 ? (
          <p>The shopping cart is empty.</p>
        ) : (
          booksInCart.map(({ title, price }, index) => (
            <div key={index}>
              Name: {title}, Price: {price}
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Home;
