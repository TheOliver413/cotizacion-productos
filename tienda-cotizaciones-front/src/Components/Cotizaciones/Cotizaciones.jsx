import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Actions/productActions';
import './Cotizaciones.css'




export default function Cotizaciones() {
    const ProductList = () => {
        const dispatch = useDispatch();
        const products = useSelector((state) => state.products);

        useEffect(() => {
            dispatch(fetchProducts());
        }, [dispatch]);

        return (
            <section className="cotizaciones">
                <div className="container-cot">
                    <div className="header-cot">
                        <h1 className='title'>Listado de cotizaciones</h1>

                        <Link style={{ textDecoration: 'none' }} to="/cotizar" className='li'><button className='btn-create'>Crear</button></Link>
                    </div>

                    <div>
                        <h1>Lista de Productos</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}
