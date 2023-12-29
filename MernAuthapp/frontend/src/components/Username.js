import React from 'react'

const Username = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
            <div>
            <div className='tittle flex flex-col items-center'>
                <h4 className='text-5xl font-bold'>hello</h4>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'> explore more </span>
                
                 </div>
                 <form className='py-1 '>
                    <div className='profile justify-center py-4'>
                        <img src="" alt="avatar" />
                    </div>
                    <div className='textbox'>
                        <input type="text" placeholder='Username' />
                        <button type='submit'>Let's Go</button>
                    </div>
                 </form>
                 </div>

        </div>
    
    </div>
  )
}

export default Username