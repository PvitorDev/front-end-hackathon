

import CardFullstack from '../../components/Cards/CardFullstack'
import CardQA from '../../components/Cards/CardQA'
import CardUX from '../../components/Cards/CardUX'
import './style.css'

export function Home() {

  return (
      <main className="homeContent">
          <>
             
             

                      <div className='cards-top'>
                          <CardFullstack />
                          <CardQA />
                          <CardUX/>
                      </div>


                  

          </>
      </main>
  )
}