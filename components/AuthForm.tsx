"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import Logo from './Logo'
import { authFormSchema } from '@/lib/utils'
import CustomInput from './CustomInput'

import { Loader2 } from 'lucide-react'
import { signIn, signUp } from '@/lib/actions/user.actions'


const AuthForm = ({ type }: { type: string }) => {
    const formSchema = authFormSchema(type)
    const router = useRouter()

    const [user, setUser] = useState<SignUpParams | null>(null);
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address1: "",
            state: "",
            postalCode: "",
            dateOfBirth: "",
            ssn: "",
            email: "",
            password: ""

        },
    })

    // 2. Define a submit handler.
   async function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
            // sign up with Appwrite and  create a Plaid token
            if (type === "signup") {
                const newUser = await signUp(data) as SignUpParams;

                setUser(newUser)
            }
            if (type === 'sign-in') {
                console.log("check debugging")
                const response = await signIn({
                    email: data.email,
                    password: data.password
                });
                console.log({response})
                if (response) return router.push("/")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className='auth-form'>
            <header className='flex flex-col md:gap-8'>
                <Logo />
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg: text-36 font-semibold text-gray-900'>
                        {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
                    </h1>
                    <p className='text-16 font-normal text-gray-600'>{
                        user ? "Link your account to get started" : "Please enter your details"
                    }</p>
                </div>
            </header>
            {user ? (<p>Plaid</p>) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {type === "signup" && (
                                <>
                                    <div className="flex gap-3">
                                        <CustomInput
                                            control={form.control}
                                            name='firstName'
                                            placeholder='Enter your first name'
                                            label='First Name'
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name='lastName'
                                            placeholder='Enter your last name'
                                            label='Last Name'
                                        />
                                    </div>
                                    <CustomInput
                                        control={form.control}
                                        name='address1'
                                        placeholder='Enter your address'
                                        label='Address'
                                    />
                                    <CustomInput
                                        control={form.control}
                                        name='city'
                                        placeholder='Enter your city'
                                        label='City'
                                    />
                                    <div className="flex gap-3">
                                        <CustomInput
                                            control={form.control}
                                            name='state'
                                            placeholder='Enter your State'
                                            label='state'
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name='postalCode'
                                            placeholder='Enter your Postal Code'
                                            label='Postal Code'
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <CustomInput
                                            control={form.control}
                                            name='dateOfBirth'
                                            placeholder='yyyy-mm-dd'
                                            label='Date of Birth'
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name='ssn'
                                            placeholder='Enter your SSN - Example: 1234'
                                            label='SSN'
                                        />
                                    </div>
                                </>
                            )}
                            <CustomInput
                                control={form.control}
                                name='email'
                                placeholder='Enter your email'
                                label='Email'
                            />
                            <CustomInput
                                control={form.control}
                                name='password'
                                placeholder='Enter your password'
                                label='Password'
                            />
                            <Button type="submit" className='form-btn w-full' disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2
                                            size={20}
                                            className='animate-spin'
                                        />
                                        Loading...
                                    </>
                                ) : (
                                    type === "sign-in" ? "Sign In" : "Sign Up"
                                )}
                            </Button>
                        </form>
                    </Form>
                    <footer className='flex justify-center gap-1'>
                        <p className="text-14 font-normal text-gray-600">
                            {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <Link href={type === "sign-in" ? "/signup" : "/sign-in"} className='form-link'>
                            {type === "sign-in" ? "Sign up" : "Sign In"}
                        </Link>
                    </footer>
                </>
            )}
        </div>
    )
}

export default AuthForm