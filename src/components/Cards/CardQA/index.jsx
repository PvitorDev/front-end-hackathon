import * as React from 'react';
import './style.css'
import Paper from '@mui/material/Paper';

function CardQA() {
    return (
        <div className='box'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#EB9400',
                    padding: '23px 40px',
                    borderRadius: '10px',
                    gap: '10px'
                }}>
                <div className='card-values'>
                    <p>QA Quality Assurance </p>
                </div>
            </Paper>
        </div>
    );
};

export default CardQA;