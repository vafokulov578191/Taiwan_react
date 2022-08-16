import React from 'react'


function Main() {
  return (
    <main className="main flex flex-col gap-5 m-auto w-96 h-full">
        <div className="flex flex-wrap gap-5 items-center">
            <div className="item w-96 h-48 bg-item_color mb-5 rounded text-white flex flex-col justify-between p-5">
                <div className="flex flex-col gap-5">
                    <span className='font-semibold text-white text-lg'>Robinhood is limiting purchases of stocks: AMC, Blackberry, Nokia and GameStop</span>
                    <div className="flex justify-between text-gray-500">
                        <span>By Miner49er</span>
                        <span className='underline'>Read More</span>
                    </div>
                </div>
                <div className="itembottom">
                    <span className=' text-red-200'>10 Dec 2017</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main