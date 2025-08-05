import React from 'react'

const ContactUs = () => {
  return (
    <div> 
      <h1 className='font-bold text-3xl p-4 m-4'>ContactUs</h1>
      <form>
        <input type='text' placeholder='Name' className='border border-black p-2 m-2' />
        <input type='text' placeholder='Message' className='border border-black p-2 m-2' />
        <button className='border border-black p-2 m-2 rounded-lg bg-gray-300'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs