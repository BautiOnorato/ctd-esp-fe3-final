import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  
  const { state } = useContext(ContextGlobal);
  const favoritos = JSON.parse(localStorage.getItem("favoritos"));

  return (
    <div className={state.theme} style={{height: "80vh", padding: "20px"}}>
      <h1 style={{textAlign: "center"}}>Dentists Favs</h1>
      <div className="card-grid">
        {favoritos.map(doctor => (<Card key={doctor.id} id={doctor.id} name={doctor.name} username={doctor.username}/>))}
      </div>
    </div>
  );
};

export default Favs;
