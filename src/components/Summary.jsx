import React from 'react';
import {
	TableCell,
	Table, 
	TableHead,
	TableBody, 
	TableRow, 
	TableContainer,
} from '@material-ui/core';
import Title from './Title';

import { useStore } from '../store';

const Summary = () => {
  const summary = useStore(state => state.summary);

  return (
    <React.Fragment>
		<Title>Summary</Title>
			<TableContainer style={{maxHeight: 440}}>
      <Table size="small" stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell>Pending</TableCell>
            <TableCell>Connected</TableCell>
            <TableCell>Responded</TableCell>
            <TableCell>Booking in Progress</TableCell>
            <TableCell>Call Booked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{ summary.pending || 0 }</TableCell>
            <TableCell>{ summary.connected || 0 }</TableCell>
            <TableCell>{ summary.responded || 0 }</TableCell>
            <TableCell>{ summary.booking_in_progress || 0 }</TableCell>
            <TableCell>{ summary.call_booked || 0 }</TableCell>
          </TableRow>
        </TableBody>
      </Table>
			</TableContainer>
    </React.Fragment>
  );
}

export default Summary