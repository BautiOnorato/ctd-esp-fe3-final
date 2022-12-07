import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { socialNetwork } from '../navigation/Routes';
import { ContextGlobal } from './utils/global.context'


const Footer = () => {

  const { state } = useContext(ContextGlobal);


  return (
    <Box sx={{position: "relative", bottom: "0"}}>
      <Box 
      sx={{width: "100%", bgcolor: "red", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}} 
      onClick={() => {window.scrollTo({top: 0})}}
      >
        <Button 
        sx={{color: "white", padding: "10px 0"}}
        >
          Volver Arriba
        </Button>
      </Box>
      <Box 
      sx={state.theme === "light" ? 
      {display: "flex", alignItems: "center", justifyContent: "space-around"} : 
      {display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "black"}}
      >
        <img src="./images/DH.png" alt="logo dh"
        style={ state.theme === "light" ?  {maxWidth: "300px"} : {maxWidth: "300px", filter: "invert(100%)"}}
        />
        <Box>
          {socialNetwork.map(({ id, Element, path, title }) => (
            <Tooltip key={id} title={title}>
              <IconButton>
                <a href={path} target="e_blank" rel="nonreferrer" style={state.theme === "light" ? {color: "black"} : {color: "white"}}>
                  <Element />
                </a>
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  )

  // return (
  //   <footer className={state.theme}>
  //       <Link className='volver-arriba' onClick={() => {window.scrollTo({top: 0})}}>Volver arriba</Link>
  //       <div>
  //         <img src="./images/DH.png" alt="logo dh" />
  //         <div>
  //           <Link to="https://www.facebook.com/"><img src='./images/ico-facebook.png' alt='Logo facebook'/></Link>
  //           <Link to="https://www.instagram.com/"><img src='./images/ico-instagram.png' alt='Logo instagram'/></Link>
  //           <Link to="https://www.tiktok.com/es/"><img src='./images/ico-tiktok.png' alt='Logo tiktok'/></Link>
  //           <Link to="https://web.whatsapp.com/"><img src='./images/ico-whatsapp.png' alt='Logo whatsapp'/></Link>
  //         </div>
  //       </div>

  //   </footer>
  // )
}

export default Footer
