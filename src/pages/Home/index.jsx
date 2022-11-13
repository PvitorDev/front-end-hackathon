import { Login } from '../../components/modalLogin'
import { useState } from 'react'
import CardFullstack from '../../components/Cards/CardFullstack'
import CardQA from '../../components/Cards/CardQA'
import CardUX from '../../components/Cards/CardUX'
import ResponsiveAppBar from '../../components/header'
import TabelaFullstack from '../../components/Tabelas/TabelaFullstack'
import TabelaQA from '../../components/Tabelas/TabelaQA'
import TabelaUX from '../../components/Tabelas/TabelaUX'
import './style.css'
import Carousel from '../../components/Carousel'

export function Home() {

  const [isActive, setIsActive] = useState(false)

  return (
    <main className="homeContent">
      <>
        <div className="container-cards-main">
          <section className="cardsMainPage">
            <ResponsiveAppBar setIsActive={setIsActive} />
          </section>
          <div className='main'>
            <div className='cards-main'>
              <TabelaFullstack />
              <TabelaQA />
              <TabelaUX />
            </div>
         
          
          </div>
          <div >
           
           <h1 className='h1Title'>Playlist Orange Juice</h1>
         <Carousel canal='Orange Juice'/>
          </div>
          <div className="carousel-Fcamara">
           <h1 className='h1Title'>Playlist FCamara</h1>
          <Carousel canal='FCamara'/>
           </div>
          <div >
          <h1 className='h1Title'>Playlist Alura</h1>
         <Carousel canal='Alura'/>
          </div>
           <div className="carousel-Fcamara">
           <h1 className='h1Title'>Playlist Rocketseat</h1>
          <Carousel canal='Rocketseat'/>
           </div>
        </div>
        {isActive && <Login setIsActive={setIsActive} />}
      </>
    </main>
  )
}