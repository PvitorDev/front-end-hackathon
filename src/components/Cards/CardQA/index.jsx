import * as React from 'react';
import './style.css'
import Paper from '@mui/material/Paper';

function CardQA() {
    return (
        <div className='boxQA'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#EB9400',
                    padding: '13px 20px',
                    borderRadius: '10px',
                    gap: '10px'
                }}>
                <div className='card-valuesQA'>
                    <p>QA Quality Assurance </p>
                </div>
            </Paper>
        </div>
    );
};

export default CardQA;