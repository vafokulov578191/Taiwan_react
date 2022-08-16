import React from 'react'


function Main({item}) {
    let {name, buy, date} = item
  return (
    <main className="main flex flex-col gap-5 m-auto w-96 h-full">
        <div className="flex flex-wrap gap-5 items-center">
            <div className="item w-96 h-48 bg-item_color mb-5 rounded text-white flex flex-col justify-between p-5">
                <div className="flex flex-col gap-5">
                    <span className='font-semibold text-white text-lg'>{name}</span>
                    <div className="flex justify-between text-gray-500">
                        <span>{buy}</span>
                        <span className='underline'>Read More</span>
                    </div>
                </div>
                <div className="itembottom">
                    <span className=' text-red-200'>{date}</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main