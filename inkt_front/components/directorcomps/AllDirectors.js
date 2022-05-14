import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function admindirector(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell align="left">Edit</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {console.log(props.directors)}
                    {props.directors.data.map((director) => (
                        <TableRow
                            key={director.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {director.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <button> <img src="https://freeiconshop.com/wp-content/uploads/edd/edit-flat.png" height={25} width={25} /> </button>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <button onClick={() => {
                                    props.deleteDirector(director.id)
                                }} > <img src="https://freeiconshop.com/wp-content/uploads/edd/trash-var-flat.png" height={25} width={25} /> </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );}
