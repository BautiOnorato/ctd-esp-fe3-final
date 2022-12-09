import axios from 'axios'
import React, { useEffect, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import styles from './CardContainer.module.css'

const Home = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      dispatch({
        type: "API_HOME",
        payload: {
          ...state,
          data: res.data,
        }
      })
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <main className={`${state.theme } ${styles.main}`}>
      <h1>Home</h1>
      <div className={styles.cardGrid}>
        {state.data.map(doctor => (
          <Card key={doctor.id} id={doctor.id} name={doctor.name} username={doctor.username}/>
        ))}
      </div>
    </main>
  )
}

export default Home