import AuthForm from '@/components/AuthForm'
import React from 'react'

async function SignUp() {

  return (
    <div className='flex-center size-full max-sm:px-6'>
      <AuthForm type='signup' />
    </div>
  )
}

export default SignUp