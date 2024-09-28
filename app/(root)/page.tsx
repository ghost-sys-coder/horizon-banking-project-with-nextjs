import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
  const loggedIn = { firstName: "Frank", lastName: "Tamale", email: "franktamalejr@gmail.com" }
  
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName}
            subtext={"Access and manage your accounts and transactions efficiently"}
          />
          <TotalBalanceBox
            totalBanks={2}
            totalCurrentBalance={3000}
            accounts={[]}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 4000 }, { currentBalance: 100000}]} />
    </section>
  )
}

export default Home