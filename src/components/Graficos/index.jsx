import {useEffect,useState,useRef} from 'react'
import api from '../../services/api'
import { getLocalItem } from '../../utils/localStorage'
import './style.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend)
const style = {
  width: 300,
};
export function Grafico(){
  const token = getLocalItem("token")
    const [fullstack, setFullstack] = useState([])
    const [qa, setQa] = useState([])
    const [ux, setUx] = useState([])
    const [usuarios, setUsuarios] = useState([])
    
    function numFullstack(){
        api.get("usuario/fullstack",{
            headers:{
            'Authorization': `Bearer ${token}`,
          } })
           .then((response)=>{
            setFullstack(response.data.count)
            setUsuarios(response.data.todos_usuarios)
        })
    }
    function numQA(){
        api.get("usuario/qa",{
            headers:{
            'Authorization': `Bearer ${token}`,
          } })
           .then((response)=>{
            setQa(response.data.count)
        })
    }
    function numUX(){
        api.get("usuario/uxui",{
            headers:{
            'Authorization': `Bearer ${token}`,
          } })
           .then((response)=>{
            setUx(response.data.count)
        })
    }
    useEffect(()=>{
       numFullstack()
       numQA()
       numUX()
       
    },[])
    const data = {
        labels: [ 'QA', 'UX-UI', 'Fullstack' ],
      
        datasets: [
          
          {
 
            data: [qa.count,ux.count,fullstack.count],
            backgroundColor: [
             
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
             
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
      const chartRef = useRef();
 
    return(
      <>
        <h4 className='h4Users'>Total de usuarios: {usuarios}</h4>
    <Pie  ref={chartRef} data={data}    />
   
   
   </>
    )
}