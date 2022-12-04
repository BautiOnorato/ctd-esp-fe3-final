import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {

  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme}>
        
        <img src="./images/DH.png" alt="logo dh" />
        <div>
          <Link to="https://www.facebook.com/"><img src='./images/ico-facebook.png' alt='Logo facebook'/></Link>
          <Link to="https://www.instagram.com/"><img src='./images/ico-instagram.png' alt='Logo instagram'/></Link>
          <Link to="https://www.tiktok.com/es/"><img src='./images/ico-tiktok.png' alt='Logo tiktok'/></Link>
          <Link to="https://web.whatsapp.com/"><img src='./images/ico-whatsapp.png' alt='Logo whatsapp'/></Link>
        </div>

    </footer>
  )
}

export default Footer
