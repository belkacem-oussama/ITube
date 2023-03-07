import React, { useState } from 'react';
import { Input, Paper } from '@mui/material';

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  const inputPlaceholder = "Welcome ! Try to tap something :)";

  return (
    <Paper elevation={6} style={{ padding: '25px', backgroundColor: '#38598b' }}>
      <form onSubmit={handleSubmit}>
      <Input placeholder={inputPlaceholder} style={{width:'100%', color:'white'}} onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
