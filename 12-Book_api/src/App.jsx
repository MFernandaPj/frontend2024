import React, { useState, useEffect } from 'react';
import SearchBook from './components/SearchBook';
import BookList from './components/BookList';
import './assets/css/index.css';

const App = () => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div className="container">
      <h1 className='mt-2'><i class="fas fa-book me-2"></i>Book Finder</h1>
      <hr />
      <SearchBook books={books} setBooks={setBooks} />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default App;

