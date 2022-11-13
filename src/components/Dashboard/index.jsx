import { useState } from "react"
import { toast } from "react-toastify";
import Modal from '@mui/material/Modal';
import CloseIcon from '../../assets/closeIcon.svg'
import { Grafico } from "../Graficos";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border:'none',
    borderRadius:'20px',
  };
import Box from '@mui/material/Box';
  import './style.css'

export function Dashboard(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
     <>
        <button onClick={handleOpen}>
        Dashboard
         </button>
        <Modal
        keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        > 
         <Box sx={style}>
            <img src={CloseIcon} alt="Close Icon"
          className="closeIcon" onClick={handleClose} />
          <Grafico/>
         </Box>
        </Modal>
        </>
    )
}