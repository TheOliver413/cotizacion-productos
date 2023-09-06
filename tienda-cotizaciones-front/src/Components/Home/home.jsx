import React from 'react'
import Nav from '../Nav/Nav'
import Cotizaciones from '../Cotizaciones/Cotizaciones'

export default function home() {
  return (
    <div className="container">
      <Nav />
      <Cotizaciones />
    </div>
  )
}
