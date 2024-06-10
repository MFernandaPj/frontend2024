import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Select } from 'antd';
import { useForm } from '../hooks/useForm';
import { getBooks } from '../api/BooksApi';
import Swal from 'sweetalert2';

const { Option } = Select;

const SearchBook = ({ books, setBooks }) => {
  const [values, handleInputChange, reset] = useForm({ book: '', category: '' });

  const handleSearchBook = async () => {
    if (values.book.trim() === '' && values.category.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingrese un término de búsqueda o seleccione una categoría!',
      });
      return;
    }

    let newBooks;
    if (values.category.trim() !== '') {
      newBooks = await getBooks(`subject:${values.category}`);
    } else {
      newBooks = await getBooks(values.book);
    }
    
    setBooks(newBooks);
    reset();
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <Input
        placeholder="Ingrese el nombre del libro"
        name="book"
        value={values.book}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }}
      />
      <Select
        defaultValue=""
        style={{ width: 200, marginRight: '10px' }}
        onChange={(value) => handleInputChange({ target: { name: 'category', value } })}
      >
        <Option value="">Seleccionar categoría</Option>
        <Option value="Fiction">Ficción</Option>
        <Option value="Nonfiction">No Ficción</Option>
        <Option value="Art">Arte</Option>
        <Option value="Biography & Autobiography">Biografía y Autobiografía</Option>
        <Option value="Comics & Graphic Novels">Cómics y Novelas Gráficas</Option>
        <Option value="Computers">Computadoras</Option>
        <Option value="Cooking">Cocina</Option>
        <Option value="Education">Educación</Option>
        <Option value="History">Historia</Option>
        <Option value="Humor">Humor</Option>
        <Option value="Language Arts & Disciplines">Artes del Lenguaje y Disciplinas</Option>
        <Option value="Law">Ley</Option>
        <Option value="Literary Collections">Colecciones Literarias</Option>
        <Option value="Mathematics">Matemáticas</Option>
        <Option value="Medical">Médico</Option>
        <Option value="Performing Arts">Artes Escénicas</Option>
        <Option value="Pets">Mascotas</Option>
        <Option value="Philosophy">Filosofía</Option>
        <Option value="Photography">Fotografía</Option>
        <Option value="Poetry">Poesía</Option>
        <Option value="Science">Ciencia</Option>
        <Option value="Technology & Engineering">Tecnología e Ingeniería</Option>
        <Option value="True Crime">Crimen Verdadero</Option>
        {/* Agrega más opciones*/}
      </Select>
      <Button type="primary" onClick={handleSearchBook}>
        Buscar
      </Button>
    </div>
  );
};

SearchBook.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default SearchBook;
