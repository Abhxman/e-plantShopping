import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return <header className="navbar"><NavLink className="brand" to="/">🌿 Paradise Nursery</NavLink><nav><NavLink to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink><NavLink className="cart-link" to="/cart">🛒 Cart <span className="cart-count">{count}</span></NavLink></nav></header>;
}
