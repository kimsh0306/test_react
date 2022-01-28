import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  { name : 'Frozen yoghurt', status : 159 },
  { name : 'Ice cream sandwich', status : 237 },
  { name : 'Eclair', status : 262 },
  { name : 'Cupcake', status : 305 },
  { name : 'Gingerbread', status : 356 },
];

const SummaryTap = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        marginTop={2}
        marginBottom={3}
        fontSize={30}
        fontWeight={100}
      >
        Subsystems and Devices
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead  >
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Subsystems and Devices</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
};

export default SummaryTap;