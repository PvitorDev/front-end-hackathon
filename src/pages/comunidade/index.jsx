import ResponsiveAppBar from '../../components/header'
import './style.css'
import { useState, useEffect} from "react";
import { Login } from '../../components/modalLogin';
import avatar from '../../assets/avatar.png'
import {AiFillPicture } from 'react-icons/ai'
import { FiVideo } from 'react-icons/fi';
import ModalPostagem from '../../components/FazerPosts';
import FeedPostagem from '../../components/feedPostagem';
import { getLocalItem } from '../../utils/localStorage';

export function Comunidade() {
    const [isActive, setIsActive] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [open, setOpen] = useState(false);
     const token = getLocalItem("token")
    return (
        <>
            <ResponsiveAppBar setIsActive={setIsActive}/>
        <div className='mainComunidade' >
        <div className="containerAll">
                <div className="publications">
                 {token &&  <div className="startPublication" >
                        <div className='pub' onClick={handleOpen} >
                        <label >
                            <img src={avatar} alt="profile-picture" />
                            <input className='inputPub' onClick={handleOpen}type="text" placeholder="Começar uma publicação..." disabled />
                        </label>
                        </div>
                        <div className="togglesOnStartPublication">
                            <div>
                                <AiFillPicture size={20} color="#0B67C2" />
                                <p>Foto</p>
                            </div>

                            <div>
                                <FiVideo size={20} color="#7FC15E" />
                                <p>Vídeo</p>
                            </div>
                        </div>
                    </div>}
                    <div >
                      <FeedPostagem/>
                   
                    </div>
                
                </div>
            </div>
            {open && (
                    <ModalPostagem
                    openModal={open}
                    />
                )}
        </div>
            {isActive && <Login setIsActive={setIsActive} />}
        </>
    )
}
