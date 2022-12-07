import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {


  const navigate = useNavigate();
  const [favorito, setFavorito] = useState(false);
  const [update, setUpdate] = useState(false);

  const addFav = () => {
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos) {
      let listaParseada = JSON.parse(favoritos);
      const listaFiltrada = listaParseada.filter(item => item.id !== id);
      const existe = listaFiltrada.length !== listaParseada.length;
      existe ? listaParseada = listaFiltrada : listaParseada.push({name: name, username: username, id: id});
      localStorage.setItem("favoritos", JSON.stringify(listaParseada));
    } else {
      localStorage.setItem("favoritos", JSON.stringify([{name: name, username: username, id: id}]))
    }
    setFavorito(!favorito)
    setUpdate(!update)
  }

  useEffect(() => {
    const favoritos = localStorage.getItem("favoritos");
    if (favoritos) {
      const lista = JSON.parse(favoritos)
      const cardEncontrada = lista.find(item => item.id === id);
      if (cardEncontrada) {
        setFavorito(true)
      }
    }
  }, [update])

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="doctor" onClick={() => navigate(`/dentist/${id}`)}/>
        {/* En cada card deberan mostrar en name - username y el id */}
      <h4>{name}</h4>
      <p>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={favorito ? "favButton added" : "favButton"}>{favorito ? "Fav" : "Add fav"}</button>
      {/* <button onClick={addFav} className="favButton">add fav</button> */}
    </div>
  )
  

};

export default Card;
