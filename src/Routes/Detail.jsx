import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
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
    <TableContainer component={Paper} >
      <Table aria-label="simple table" className={state.theme}>
        <TableHead>
          <TableRow>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Name</TableCell>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Email</TableCell>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Phone</TableCell>
            <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.name}</TableCell>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.email}</TableCell>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.phone}</TableCell>
              <TableCell sx={state.theme === "light" ? { color: "black" } : { color: "white" }} align="left">{data?.website}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Detail