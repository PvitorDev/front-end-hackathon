import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './style.css';

export function PaginationControlled({ setContentPage, page , count}) {
  const handleChange = (event, value) => {
    setContentPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography className='page'>Página: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}