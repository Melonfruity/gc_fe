import React from 'react';
import {
	Grid,
  Box,
	TextField,
  Button,
} from '@material-ui/core';
import Title from './Title';

import { useMUITextField } from '../hooks/useMUITextField';
import { useStore } from '../store';

const PersonForm = () => {

  const handleAddEntry = useStore((state) => state.handleAddEntry);

  const newName = useMUITextField("");
  const newTitle = useMUITextField("");
  const newCompany = useMUITextField("");

  const handleSubmit = () => {
    handleAddEntry({ name: newName.value, title: newTitle.value, company: newCompany.value })
    newName.reset();
    newTitle.reset();
    newCompany.reset();
  }

	return (
		<React.Fragment>
      <Box>
        <Grid container spacing={3} direction="row">
          <Grid item xs={2}>
            <Title>Add New Lead</Title>
          </Grid>
          <Grid item xs={3}>
            <TextField 
              value={newName.value}
              onChange={newName.onChange}
              fullWidth
              placeholder="Name"
            />
            </Grid>
          <Grid item xs={3}>
            <TextField 
              value={newTitle.value}
              onChange={newTitle.onChange}
              fullWidth placeholder="Title" 
            />
            </Grid>
          <Grid item xs={3}>
            <TextField 
              value={newCompany.value} 
              onChange={newCompany.onChange} 
              fullWidth 
              placeholder="Company"
            />
          </Grid>
          <Grid item xs={1}>
            <Button 
              variant="contained" 
              onClick={handleSubmit} 
              color="primary" 
              fullWidth>
                Add
              </Button>
            </Grid>
        </Grid>
      </Box>
		</React.Fragment>
	);
}

export default PersonForm