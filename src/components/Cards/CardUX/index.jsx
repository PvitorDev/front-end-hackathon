import * as React from 'react';
import './style.css'
import Paper from '@mui/material/Paper';

function PaidCharges() {
    return (
        <div className='paidCharges-box'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#EB9400',
                    padding: '23px 40px',
                    borderRadius: '10px',
                    gap: '10px'
                }}>
                <div className='paid-values'>
                    <p>QA Quality Assurance </p>
                </div>
            </Paper>
        </div>
    );
};

export default PaidCharges;