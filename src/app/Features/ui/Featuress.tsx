import React from 'react'

const Featuress = () => {
  return (
    <div>
      <div className='flex pt-16 justify-center gap-38 '>
        <div className='flex flex-col gap-8 just items-start'>
         <div className="flex flex-col gap-2 ">
        <p className="text-7xl font-bold text-slate-700 ">
          Features for
        </p>
        <p className="text-7xl font-bold  text-slate-700 ">
          finding focus
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-2xl  text-gray-600">
        Harness our innovative feature set to
        </p>
        <p className="text-2xl  text-gray-600">
         propel your productivity power. Make
        </p>
        <p className="text-2xl  text-gray-600">
          every moment count, stress less.
        </p>
      </div>
      <a
          className=" w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10"
          rel="noreferrer"
          href="https://prismic.io"
        >
          Try for free
        </a>
        </div>
        <div>
            <img className='w-xl' src="./fetures.avif" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Featuress
