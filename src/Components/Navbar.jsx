import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button } from '@mui/material';
import { createTheme } from '@mui/material';
import { routes } from '../navigation/Routes';
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';


const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <Box sx={{width: "100%"}}>
      <AppBar position='static' sx={{width: "100%"}}>
        <Toolbar sx={{display: "flex", color: "white"}}>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <span style={{color: "red"}}>D</span>H Odonto
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "30%"}}>
            {routes.map(({ id, path, title }) => title !== "Detail" ?
             <Link key={id} to={path}
             style={{textDecoration: "none", fontSize: "1.2rem", color: "white"}}
             >
              {title}
              </Link> 
             : "")}
            <Button variant="contained" 
            onClick={() => dispatch({type: state.theme})}
            sx={state.theme === "light" ? 
            {backgroundColor: "black", "&:hover": {backgroundColor: "white", color: "black"}} : 
            {backgroundColor: "white", color: "black", "&:hover": {backgroundColor: "black", color: "white"}}}
            >
              {state.theme === "light" ? "🌙" : "☀"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
