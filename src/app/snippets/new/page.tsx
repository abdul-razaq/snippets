import React from 'react'

export default function SnippetCreatePage() {
  return (
    <form className='border-2 w-1/2 p-10 mx-auto rounded-lg mt-20 flex flex-col items-center justify-center'>
      <h3 className='font-sans font-medium text-3xl text-slate-700 mb-10'>Create snippet</h3>
      <div className="flex items-center">
        <label htmlFor="title" className='w-12 font-sans font-medium text-slate-600 text-2xl mr-6'>Title</label>
        <input type="text" name="title" id="title" className='bg-white border-2 border-slate-300 rounded-md p-1 active:border-slate-500 text-slate-700 pl-3' />
      </div>

      <div className="flex items-center my-10">
        <label htmlFor="code" className='w-12 font-sans font-medium text-slate-600 text-2xl mr-6'>Code</label>
        <textarea  name="code" id="title" className='bg-white border-2 border-slate-300 rounded-md p-1 active:border-slate-500 text-slate-700 pl-3' />
      </div>

      <button className='border-2 border-blue-300 p-3 rounded-lg text-black font-medium bg-blue-200'>Save snippet</button>
    </form> 
  )
}
