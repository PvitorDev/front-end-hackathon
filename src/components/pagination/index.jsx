import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './style.css';

export function PaginationControlled({ setContentPage, page }) {
  const handleChange = (event, value) => {
    setContentPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography className='page'>Page: {page}</Typography>
      <Pagination count={6} page={page} onChange={handleChange} />
    </Stack>
  );
}