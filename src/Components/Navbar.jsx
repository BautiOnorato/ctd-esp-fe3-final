import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const valorBtn = state.theme === "dark" ? "☀" : "🌙";
  const claseBtn = state.theme === "dark" ? "light" : "dark";

  return (
    <nav className={state.theme}>
        <h1><span className='text-danger'>D</span>H Odonto</h1>
        <div className='d-flex justify-content-around w-25'>
          <Link className='link' to="/home">Home</Link>
          <Link className='link' to="/contact">Contact</Link>
          <Link className='link' to="/favs">Favs</Link>
          <button className={`btn btn-${claseBtn}`} onClick={() => dispatch({type: state.theme})}>{valorBtn}</button>
        </div>
    </nav>
  )
}

export default Navbar