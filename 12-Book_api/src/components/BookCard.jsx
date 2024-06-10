import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import BookModal from './BookModal';

const { Meta } = Card;

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Card
      hoverable
      style={{ width: '18rem', margin: '8px' }} 
      cover={<img 
               alt={book.title} 
               src={book.imageLinks?.thumbnail || 'default-image.jpg'} 
               style={{ height: '400px', objectFit: 'cover' }} // Ajuste de tamaño de la imagen
             />}
      actions={[
        <Button type="primary" onClick={handleShowModal}>
          Ver más
        </Button>,
      ]}
    >
      <Meta title={book.title} description={book.description?.substring(0, 100) + '...'} />
      <BookModal show={showModal} handleClose={handleCloseModal} book={book} />
    </Card>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
