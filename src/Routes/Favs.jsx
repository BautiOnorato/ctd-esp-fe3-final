import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from './CardContainer.module.css'

const Favs = () => {
  
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    dispatch({
      type: "FAVS",
      payload: {
        ...state,
        favs: JSON.parse(localStorage.getItem("favoritos"))
      }
    })
  }, [])

  return (
    <div className={`${state.theme } ${styles.main}`}>
      <h1>Dentists Favs</h1>
      <div className={styles.cardGrid}>
        {state.favs.map(doctor => (
        <Card key={doctor.id} id={doctor.id} name={doctor.name} username={doctor.username}/>
        ))}
      </div>
      <Button 
      onClick={() => {
        dispatch({
          type: "FAVS",
          payload: {
            ...state,
            favs: []
          }
        });
        localStorage.setItem("favoritos", JSON.stringify([]));
      }}
      sx={state.theme === "dark" ?
        {bgcolor: "white", color: "black", "&:hover": {backgroundColor: "black", color: "white", border: "2px solid white"}} :
        {bgcolor: "black", color: "white", "&:hover": {backgroundColor: "white", color: "black", border: "2px solid black"}}}
      >Eliminar todos</Button>
    </div>
  );
};

export default Favs;
