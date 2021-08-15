import React, { useState } from 'react';
import {
	Paper,
	Grid,
	makeStyles,
	TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useStore } from '../store'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
	formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const defaultQueryFields = ["Name","Title","Company", "Interest"];

const SearchBar = () => {
	const classes = useStyles();
	
  const leads = useStore(state => state.leads);
	const setSelectedSearch = useStore(state => state.setSelectedSearch);

	const [queryField, setQueryField] = useState("Name") // Query Keys / Fields

	const handleQueryChange = (e, value) => setSelectedSearch(value.split(", ")[0])
	const handleQueryField = (e, value) => setQueryField(() => value);

	return (
		<Paper component="form" className={classes.root}>
			<Grid container spacing={2} style={{ paddingLeft: 10, paddingRight: 10 }}>
				<Grid item xs={2}>
					<Autocomplete
						options={defaultQueryFields}
						getOptionLabel={(option) => option}
						onChange={handleQueryField}
						defaultValue={"Name"}
						disableClearable
						renderInput={(params) =>
							<TextField
								{...params}
								disabled
								variant="standard"
								placeholder={"Field"}
								InputProps={{ 
									...params.InputProps, 
									disableUnderline: true 
								}}
							/>
						}
					/>
				</Grid>
				<Grid item xs={10}>
					<Autocomplete 
						className={classes.input}
						options={leads.map((option) => [option.index, option.name, option[queryField.toLocaleLowerCase()]].join(", "))}
						renderOption={(option) => option.split(', ').slice(1).join(', ')}
						getOptionLabel={(option) => option}
						onInputChange={handleQueryChange}
						disableClearable
						renderInput={(params) => {
							params.inputProps.value = params.inputProps.value.split(', ').slice(1).join(', ')
							return (
								<TextField 
									{...params}
									InputProps={{ 
										...params.InputProps, 
										type: 'search', 
										disableUnderline: true 
									}} 
								/>
							)
						}}
					/>
				</Grid>
			</Grid >
		</Paper>
	);
}

// [queryField.toLocaleLowerCase()]

export default SearchBar