"use client"
import { useRouter } from 'next/navigation'

const  Home: React.FC = () =>{
  const router = useRouter();
  const submit = () =>{
    router.push('/quiz');
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?size=626&ext=jpg&ga=GA1.2.1444344790.1683711147&semt=ais")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
    <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to the Quiz App!</h1>
    <div className="flex flex-col items-center">
      <p className="mb-4 text-lg text-gray-700">Please enter your name to get started:</p>
      <input className="w-60 h-10 rounded-lg border p-2 mb-4" type="text" placeholder="Enter Your Name" name="" id="" />
      <button onClick={submit} type="button" className="text-white w-full bg-gradient-to-r from-purple-400 via-purple-500 border to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-600 font-medium rounded-lg text-sm px-5 py-2.5">
        Start
      </button>
    </div>
  </main>
  
  
  
  
  );
}
export default Home;