import React from 'react'

function Header() {
  return (
    <header className="header m-auto w-[50rem] h-96 mt-6 p-5 flex flex-col gap-6 font-sans">
        <div className="headertop flex gap-4 items-center justify-center">
            <input className='w-96 h-11 rounded bg-inherit outline-none text-white placeholder:text-state-400 border p-3' type="text" placeholder='Search for something...' />
            <button className='bg-white text-black w-28 rounded font-semibold h-11'>Search</button>
        </div>
        <div className="headerbottom flex flex-col gap-4 text-white text-center">
            <h1 className='text-6xl font-semibold'>Robinhood is limiting purchases of stocks: AMC, Blackberry, Nokia and GameStop</h1>
            <span className='text-gray-500 underline cursor-pointer'>Read Full Story</span>
        </div>

        <div className="flex gap-1">
            <span className='text-gray-500'>Category : </span>
            <span className='text-white font-semibold'>Game</span>
        </div>
    </header>
  )
}

export default Header