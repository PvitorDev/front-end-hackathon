import * as React from 'react';
import './style.css'
import Paper from '@mui/material/Paper';


function CardUX() {
    return (
        <div className='box'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#17EB71',
                    padding: '23px 40px',
                    borderRadius: '10px',
                    gap: '10px'
                }}>
              
                <div className='card-values'>
                    <p>UX/UI Design</p>
                </div>
            </Paper>
        </div>
    );
};

export default CardUX;