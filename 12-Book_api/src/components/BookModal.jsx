import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Button } from 'antd';

const BookModal = ({ show, handleClose, book }) => {
  if (!book) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fa-solid fa-book-open"></i> {book.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-4">
            <img src={book.imageLinks?.thumbnail || 'default-image.jpg'} alt={book.title} style={{ width: '100%' }} />
          </div>
          <div className="col-md-8">
            <p><strong><i className="bi bi-person-fill"></i> Autor:</strong> {book.authors?.join(', ')}</p>
            <p><strong><i className="bi bi-calendar"></i> Fecha de publicación:</strong> {book.publishedDate}</p>
            <p><strong><i className="bi bi-journal-text"></i> Número de páginas:</strong> {book.pageCount}</p>
            <p><strong><i className="bi bi-info-circle"></i> Descripción:</strong> {book.description}</p>
            <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
              <Button className="custom-primary-button" type="primary">Leer vista previa</Button>
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="custom-secondary-button" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

BookModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  book: PropTypes.object,
};

export default BookModal;
