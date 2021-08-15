import React from 'react';
import {
	TableCell,
	TableRow,
  IconButton,
  TextField
} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveIcon from '@material-ui/icons/Save';

import { useMUITextField } from '../hooks/useMUITextField';
import { useStore } from '../store';

const PersonEntry = (props) => {
  const { index, name, title, company, outbound_date, interest } = props.entry;
  const newName = useMUITextField(name);
  const newTitle = useMUITextField(title);
  const newCompany = useMUITextField(company);
  
  const handleUpdateEntry = useStore((state) => state.handleUpdateEntry);
  const handleRemoveEntry = useStore((state) => state.handleRemoveEntry);

  return (
    <TableRow>
      <TableCell>
        <TextField 
          InputProps={{ disableUnderline: true }}
          { ...newName }
        />
      </TableCell>
      <TableCell>
        <TextField
          InputProps={{ disableUnderline: true }} 
          { ...newTitle }
        />
      </TableCell>
      <TableCell>
        <TextField 
          InputProps={{ disableUnderline: true }}
          { ...newCompany }
        />
      </TableCell>
      <TableCell><TextField defaultValue={outbound_date} disabled InputProps={{ disableUnderline: true }} /></TableCell>
      <TableCell><TextField defaultValue={interest} disabled InputProps={{ disableUnderline: true }} /></TableCell>
      <TableCell>
        <IconButton 
          onClick={() => handleUpdateEntry({ ...props.entry, name: newName.value, title: newTitle.value, company: newCompany.value })}
        >
          <SaveIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton 
          onClick={() => handleRemoveEntry(index)}
        >
          <DeleteForeverIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default PersonEntry;
