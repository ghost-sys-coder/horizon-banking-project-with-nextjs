import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

async function Home() {
  const loggedIn = await getLoggedInUser()
  console.log({loggedIn})
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext={"Access and manage your accounts and transactions efficiently"}
          />
          <TotalBalanceBox
            totalBanks={2}
            totalCurrentBalance={8400}
            accounts={[]}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 8400 }, { currentBalance: 100000}]} />
    </section>
  )
}

export default Home