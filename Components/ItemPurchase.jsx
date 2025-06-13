
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(name,calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('BAG', 500, 1, 500 ),
   createData('UMBRELLA', 250, 1, 250 ),
  createData('PENCIL', 10, 12, 120 ),
   createData('BOOKS', 60, 10, 600 ),
   createData('TIFFIN BOX', 300, 1, 300 ),
   createData('SHOES', 400, 1, 400 ),
   createData('BOTTLES', 250, 1, 250 ),
];
  const submitHandler = () => {
    console.log("Submitted Data:", input);
    // you can navigate or do further actions here
  };
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ITEM</TableCell>
            <TableCell align="right">PRIZE</TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            ))}
          
          
        </TableBody>
      </Table>
    </TableContainer>
   
  );
}
