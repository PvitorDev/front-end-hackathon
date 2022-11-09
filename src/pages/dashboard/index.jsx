

import Changes from '../../components/Cards/CardFullstack'
import OverdueCharges from '../../components/Cards/CardQA'
import PaidCharges from '../../components/Cards/CardUX'
import './style.css'

export function Home() {

  return (
      <main className="homeContent">
          <>
             
             

                      <div className='cards-top'>
                          <PaidCharges />
                          <OverdueCharges />
                          <Changes />
                      </div>


                  

          </>
      </main>
  )
}