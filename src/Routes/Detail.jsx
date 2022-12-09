import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './Detail.module.css'

const Detail = () => {
 
  const [data, setData] = useState(null); 
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={`${state.theme} ${styles.contenedor}`}>
      <h1 className={styles.titulo}>Detail Dentist {data?.name}</h1>
      <TableContainer className={styles.tablaContenedor}>
      <Table aria-label="simple table" className={`${state.theme} ${styles.tabla}`} >
        <TableHead>
          <TableRow>
            <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">Name</TableCell>
            <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">Email</TableCell>
            <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">Phone</TableCell>
            <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">{data?.name}</TableCell>
              <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">{data?.email}</TableCell>
              <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">{data?.phone}</TableCell>
              <TableCell sx={state.theme === "dark" ? {color: "white"} : {color: "black"}} align="left">{data?.website}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Detail