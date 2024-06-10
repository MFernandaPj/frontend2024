import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = ({ books }) => {
  return (
    <div className="row justify-content-center">
      {books.map((book, index) => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;

