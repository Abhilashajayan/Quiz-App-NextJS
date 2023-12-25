"use client"
import { useState } from "react";

 const page = () => {
 const [name, setName] = useState<string>("");
 const [email, setEmail] = useState<string>("");
 const [password, setPassword] = useState<string>("");

 const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    

 }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[360px] h-[440px] bg-blue-500 rounded-md shadow-md p-8">
        <h1 className="text-2xl font-bold flex justify-center text-white mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}  action="">
          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="bg-gray-200 px-3 py-2 w-full rounded"
              id="username"
              onChange={(e)=>setName(e.target.value)}
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-200 px-3 py-2 w-full rounded"
              id="email"
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
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
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-400 w-full hover:text-white transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
export default page;