import React from 'react'

const Pabout = () => {
  return (
    <div>
      <div className='flex pt-16 justify-center gap-26 '>
        <div className='flex flex-col gap-8 just items-start'>
         <div className="flex flex-col gap-2 ">
        <p className="text-7xl font-bold text-slate-700 ">
          About the
        </p>
        <p className="text-7xl font-bold  text-slate-700 ">
          Flowrise team
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-2xl  text-gray-600">
          We’ve been seeking our own inner focus
        </p>
        <p className="text-2xl  text-gray-600">
          for over 8 years. We’re a passionate team
        </p>
        <p className="text-2xl  text-gray-600">
          trying to make the world a better place.
        </p>
      </div>
      <button className='bg-cyan-700 hover:bg-cyan-800 text-white py-3 px-12 rounded-full font-bold'>Join us!</button>
        </div>
        <div>
            <img className='w-xl' src="./abot.avif" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Pabout
