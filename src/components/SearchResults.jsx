import React from 'react';
import {
	TableCell,
	Table, 
	TableHead,
	TableBody, 
	TableRow, 
	TableContainer
} from '@material-ui/core';
import Title from './Title';

import { useStore } from '../store';

const SearchResults = () => {
  const selectedSearch = useStore(state => state.selectedSearch);

  return (
    <React.Fragment>
		<Title>Search Result</Title>
			<TableContainer style={{maxHeight: 440}}>
      <Table size="small" stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Outbound Date</TableCell>
            <TableCell>Interest</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{ selectedSearch.name || "Name" }</TableCell>
              <TableCell>{ selectedSearch.title || "Title" }</TableCell>
              <TableCell>{ selectedSearch.company || "Company" }</TableCell>
              <TableCell>{ selectedSearch.outbound_date || "Date" }</TableCell>
              <TableCell>{ selectedSearch.interest || "Interest" }</TableCell>
            </TableRow>
        </TableBody>
      </Table>
			</TableContainer>
    </React.Fragment>
  );
}

export default SearchResults