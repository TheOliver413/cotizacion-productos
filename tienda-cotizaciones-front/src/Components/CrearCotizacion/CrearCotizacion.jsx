import React, { useState, handleSubmit } from 'react';
import Nav from '../Nav/Nav'
import axios from 'axios';

import './crearcotizacion.css'

export default function CrearCotizacion() {

  const [errors, setErrors] = useState({ form: 'Debe completar el formulario' });

  const [form, setForm] = useState({
    name: '',
    lasname: '',
    address: '',
    releaseDate: '',
  });

  const validate = form => {
    let errors = {};
    if (!form.name) {
      <span className='error'>El Nombre es obligatorio</span>
      errors.name = 'El nombre es obligatorio';
    } else if (form.name.length < 0) {
      errors.name = 'El nombre no puede estar vacio';
    }

    if (!form.lasname) {
      <span className='error'>El Apellido es obligatorio</span>
      errors.lasname = 'El nombre es obligatorio';
    } else if (form.lasname.length < 3) {
      errors.lasname = 'El apellido no puede estar vacio';
    }
    return errors;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.form);
    try {
      const response = await axios.post('http://localhost:3001/api/v1/product', this.state.form);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };



  return (
    <div className="container">
      <Nav />
      <section className="cotizaciones">
        <div className="container-cot">
          <div className="header-cot">
            <h1 className='title'>Crear Cotizacion</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name' className="title-name"><strong>Nombre: </strong></label>
            <input
              className="input"
              placeholder='Nombre'
              type="text"
              id='name'
              name='name'
              autoComplete="off"
              value={form.name}
              onChange={handleInputChange}
            />

            <label htmlFor='lasname' className="title-name"><strong>Apellido: </strong></label>
            <input
              className="input"
              placeholder='Apellido'
              type="text"
              id='lasname'
              name='lasname'
              autoComplete="off"
              value={form.lasname}
              onChange={handleInputChange}
            />

            <label htmlFor='address' className="title-name"><strong>Direccion: </strong></label>
            <input
              className="input"
              placeholder='Direccion'
              type="text"
              id='address'
              name='address'
              autoComplete="off"
              value={form.address}
              onChange={handleInputChange}
            />

            <label htmlFor="rating" className="title-name"><strong>Fecha: </strong></label>
            <input
              name='releaseDate'
              className="input"
              type="date"
              id="date"
              value={form.releaseDate}
              onChange={handleInputChange}
            />

            <div className="div-but-form">
              <button type='submit'>Crear</button>
            </div>
          </form>

        </div>
      </section>
    </div>
  )
}
