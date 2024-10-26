import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <Link href={"/"} className='cursor-pointer items-center flex gap-1'>
                <Image
                    src={"/icons/logo.svg"}
                    width={34}
                    height={34}
                    alt='Horizon Logo'
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Horizon</h1>
            </Link>
        </>
    )
}

export default Logo