import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const AllAuthors = () => {


  return (
    <div style={{}}>
        <h2 style={{marginBottom:"10px"}}>FULL AUTHOR LIST</h2>
        <Button style={{margin:"0px"}} variant="contained">Add an Author</Button>
        <Table style={{width:"350px", margin:"10px auto"}}>
           <TableHead>
            <TableRow style={{backgroundColor:"lavender"}}>
                <TableCell style={{fontWeight:"bold"}}>Author</TableCell>
                <TableCell style={{fontWeight:"bold"}}>Actions Available</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Bill Bryson</TableCell>
                <TableCell>
                    <button style={{
                        padding:"8px 20px",
                        marginRight:"10px",
                        cursor:"pointer",
                        backgroundColor:"lightBlue",
                        border:"black 1px solid",
                        borderRadius:"3px",}}>
                        Edit</button>

                    <button style={{
                        padding:"3px 10px",
                        cursor:"pointer"}}>
                        Delete</button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Ada Lovelace</TableCell>
                <TableCell>
                    <button style={{
                        padding:"8px 20px",
                        marginRight:"10px",
                        cursor:"pointer",
                        backgroundColor:"lightBlue",
                        border:"black 1px solid",
                        borderRadius:"3px",}}>
                        Edit</button>

                    <button style={{
                        padding:"3px 10px",
                        cursor:"pointer"}}>
                        Delete</button>
                </TableCell>
            </TableRow>
           </TableHead>
        </Table>
    </div>
  )
}

export default AllAuthors