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
        </div>
        {isActive && <Login setIsActive={setIsActive} />}
      </>
    </main>
  )
}