import React from 'react'

export default function Header() {
  return (
    <header className='w-full fixed z-10 top-0  h-auto bg-black text-white'>
        <div className='container sm:container md:container lg:container'>
          <div className='flex'>
            <div className='text-2xl font-semibold py-4 px-4'>Music App</div>
          </div>
        </div>
    </header>
  )
}
