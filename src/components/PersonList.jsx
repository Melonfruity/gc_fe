import React, { useState } from 'react';
import {
	TableCell,
	Table, 
	TableHead,
	TableBody, 
	TableRow, 
	TableContainer,
  TablePagination,
} from '@material-ui/core';
import Title from './Title';

import PersonEntry from './PersonEntry';
import { useStore } from '../store';

const PersonList = () => {
  
  const leads = useStore(state => state.leads)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
		<Title>Complete List (click to update field)</Title>
			<TableContainer style={{maxHeight: 440}}>
      <Table size="small" stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Outbound Date</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Save</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((entry) => <PersonEntry key={entry.name} entry={entry} />)}
        </TableBody>
      </Table>
			</TableContainer>
			<TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={leads.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}

export default PersonList