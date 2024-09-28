'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'



const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <div className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={"/icons/hamburger.svg"}
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side={'left'} className='border-none bg-white'>
                    <Link href={"/"} className='cursor-pointer items-center gap-1 flex px-4'>
                        <Image
                            src={"/icons/logo.svg"}
                            width={34}
                            height={34}
                            alt='Horizon Logo'
                            className='size-[24px] max-xl:size-14'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>

                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                                    height={20}
                                                    width={20}
                                                />

                                                <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav