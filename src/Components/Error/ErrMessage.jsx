import React from 'react'

const ErrMessage = ({children}) => {
  return (
    <div className='py-4 text-center tracking-wider capitalize text-white w-full font-bold bg-red-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30'>
        {children}
    </div>
  )
}

export default ErrMessage;