import * as React from 'react';
import Paper from '@mui/material/Paper';
import './style.css'
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import { useNavigate } from 'react-router-dom';
function CardFullstack() {
    const navigate = useNavigate();
    function handleClick(){
        console.log("ok")
    }
    return (
        <div onClick={handleClick} className='box'>
            <Paper elevation={2}
                sx={{
                    display: 'flex',
                    backgroundColor: '#9417EB',
                    padding: '23px 40px',
                    borderRadius: '10px',
                    gap: '10px'

                }}>
                <div className='card-values'>
                    <p>Fullstack Developer</p>
                </div>
            </Paper>
        </div>
    );
};

export default CardFullstack;