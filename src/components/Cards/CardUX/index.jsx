import * as React from 'react';
import './style.css'
import Paper from '@mui/material/Paper';


function CardUX() {
    return (
        <div className='boxUx'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#17EB71',
                    padding: '13px 40px',
                    borderRadius: '10px',
                    gap: '10px'
                }}>
              
                <div className='card-valuesUx'>
                    <p>UX/UI Design</p>
                </div>
            </Paper>
        </div>
    );
};

export default CardUX;