import React from 'react'

const NewUser = () => {
  return (
    <div className='flex-[4]'>
      {/* newUser Title */}
      <h1 className='text-3xl font-semibold'>New User</h1>
      <form className='flex flex-wrap'>
        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Username</label>
          <input type='text' placeholder='Username' className='h-7 p-3 rounded-md border border-gray-400' />
        </div>

        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Full name</label>
          <input type='text' placeholder='Full name' className='h-7 p-3 rounded-md border border-gray-400' />
        </div>
        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Email</label>
          <input type='email' placeholder='Email' className='h-7 p-3 rounded-md border border-gray-400' />
        </div>
        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Password</label>
          <input type='password' placeholder='Password' className='h-7 p-3 rounded-md border border-gray-400' />
        </div>
        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Phone</label>
          <input type='text' placeholder='Phone' className='h-7 p-3 rounded-md border border-gray-400' />
        </div>
        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Address</label>
          <input type='text' placeholder='Address' className='h-7 p-3 rounded-md border border-gray-400' />
        </div>
        {/* new user item */}
        <div className='w-96 flex flex-col mt-2 mr-5'>
          <label className='mb-2 text-sm font-semibold text-gray-400'>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" className='mt-4' />
            <label for="male" className='m-2 text-lg text-[#555]'>Male</label>
            <input type="radio" name="gender" id="female" value="female" className='mt-4' />
            <label for="female" className='m-2 text-lg text-[#555]'>Female</label>
            <input type="radio" name="gender" id="other" value="other" className='mt-4' />
            <label for="other" className='m-2 text-lg text-[#555]'>Other</label>
          </div>
        </div>
        <button className='w-36 h-10 mt-7 rounded-md py-2 px-3 font-semibold cursor-pointer bg-blue-700 hover:bg-blue-600 text-white'>Create</button>
      </form>
    </div>
  )
}

export default NewUser
