"use client"

import { useState } from "react"


const page = () => {
const [name, setName] = useState<string>('');
const [email, setEmail] = useState<string>('');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log("hello");
}
  return (
    <div className="flex justify-center  items-center h-screen">
    <div className="w-[330px] h-96 bg-blue-500  rounded-md shadow-md p-8">
      <h1 className="text-2xl font-bold flex justify-center text-white mb-6">Login</h1>
      <form onSubmit={handleSubmit} action="">
        <div className="mb-4">
          <label className="text-white block mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="bg-gray-200 px-3 py-2 w-full rounded"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label className="text-white block mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="bg-gray-200 px-3 py-2 w-full rounded"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-400 w-full hover:text-white transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  )
}

export default page