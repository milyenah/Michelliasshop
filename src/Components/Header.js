import React, { useContext, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi';
import { Context } from '../Context';
import { menu } from './menu';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const $ = useContext(Context);
  const [openBurger, setOpenBurger] = useState(false);
  const [openShop, setOpenShop] = useState(false);
  return (
    <>
      <header id='header'>
      <h1>Michelia's Shop</h1>
      <div className="burger-menu" onClick={() => {
      setOpenBurger(!openBurger);
    }}>
      <div className="line" style={{ transform: openBurger ? 'rotate(-45deg)' : 'rotate(0deg)' }}></div>
      <div className="line" style={{ width: openBurger ? '0' : '100%' }}></div>
      <div className="line" style={{ transform: openBurger ? 'rotate(45deg)' : 'rotate(0deg)' }}></div>
    </div>
     
    </header>
    <ul className='menu' style={{ right: openBurger ? '0' : '-100%' }}>
        <li onClick={() => setOpenBurger(false)}><NavLink to="/">Home</NavLink></li>
        <li onClick={() => setOpenBurger(false)}><NavLink to="/about">About</NavLink></li>
        <li onClick={() => setOpenBurger(false)}><NavLink to="/shop">Shop</NavLink></li>
        <li onClick={() => setOpenBurger(false)}><NavLink to="/sales">Sales & Offers</NavLink></li>
        <li onClick={() => setOpenBurger(false)}><NavLink to="/contact">Contact</NavLink></li>
        <div className="shop-icon" onClick={() => {
          $.setOpenCart(true);
          setOpenBurger(false)
        }}>
          <button><HiShoppingCart className='bag'/></button>
          <span>{$.carts.length}</span>
        </div>
      </ul>
    </>
  )
}
