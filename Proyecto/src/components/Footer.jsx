// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para estilos
import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters';

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()


 return (
  <footer>
    {/*
      JSON.stringify(filters, null, 2)
    */}
    {
      JSON.stringify(cart, null, 2)
    }
  </footer>
 )
}
