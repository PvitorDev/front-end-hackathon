

import CardFullstack from '../../components/Cards/CardFullstack'
import CardQA from '../../components/Cards/CardQA'
import CardUX from '../../components/Cards/CardUX'
import TabelaFullstack from '../../components/Tabelas/TabelaFullstack'
import TabelaQA from '../../components/Tabelas/TabelaQA'
import TabelaUX from '../../components/Tabelas/TabelaUX'
import './style.css'

export function Home() {

  return (
      <main className="homeContent">
          <>
          <div className="container-cards-main">
          <section className="cardsMainPage">
            <h1>OLA MUNDO</h1>
                </section>
                    <div className='main'>
                      <div className='cards-top'>
                          <CardFullstack />
                          <CardQA />
                          <CardUX/>
                      </div>
                      <div className='cards-main'>
                        <TabelaFullstack/>
                        <TabelaQA/>
                        <TabelaUX/>
                    </div>
                    </div>
                    </div>
          </>
      </main>
  )
}