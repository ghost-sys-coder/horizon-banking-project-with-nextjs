"use client"

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
    return (
        <div className='w-full total-balance-amount flex-center gap-2'>
            <CountUp
                end={amount}
                decimal=','
                prefix='UGX'
                duration={2.75}
                decimals={2}
            />
        </div>
    )
}

export default AnimatedCounter