import * as React from 'react';
import './style.css'
import Paper from '@mui/material/Paper';


function OverdueCharges() {
    return (
        <div className='overdue-box'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#17EB71',
                    padding: '23px 40px',
                    borderRadius: '10px',
                    gap: '10px'
                }}>
              
                <div className='overdue-values'>
                    <p>UX/UI Design</p>
                </div>
            </Paper>
        </div>
    );
};

export default OverdueCharges;