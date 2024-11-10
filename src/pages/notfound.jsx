import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NotFound = () => {

  const error = useRouteError()
  console.log(error);

  return (
    <main className='w-screen h-screen flex items-center justify-center'>
      <section className='flex flex-col items-center justify-center'>
        <h1 className='text-9xl font-bold text-prm-clr mb-8'>
          { error.status }
        </h1>
        <h3 className='text-2xl font-semibold mb-2'>{ error.statusText }</h3>
        <p className='text-sm mb-4'>{ error.data }</p>
        <Link to="/" className='bg-prm-clr text-scd-clr px-8 py-2 rounded-lg shadow-lg'> Back to Home </Link>
      </section>
    </main>
  )
}

export default NotFound