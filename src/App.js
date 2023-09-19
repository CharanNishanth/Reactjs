import React from 'react';
import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom';
import Home from './Home';
import BookCardCon from './BookCardCon';
import BookListApiCon from './BookListApiCon';
// import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav>
        <Link to="/"> Home </Link>
        <Link to='/bookcard' > Bookcard </Link>
        <Link to='/booklist' > BookList </Link>
        </nav>
        <div>
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path='/bookcard' element={<BookCardCon />} />
          <Route path='/booklist' element={<BookListApiCon/>}></Route>
       </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;