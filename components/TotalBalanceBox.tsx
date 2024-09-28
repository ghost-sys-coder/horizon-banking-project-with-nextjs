import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

function TotalBalanceBox({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotlaBalanceBoxProps) {
    return (
        <div className='total-balance'>
            <div className="total-balance-chart">
                <DoughnutChart
                    accounts={accounts}
                />
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts Connected: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className='total-balance-label'>
                        Total Current Balance
                    </p>
                    <AnimatedCounter
                        amount={totalCurrentBalance}
                    />
                </div>
            </div>
        </div>
    )
}

export default TotalBalanceBox