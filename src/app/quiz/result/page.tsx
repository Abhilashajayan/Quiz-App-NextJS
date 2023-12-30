"use client"

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'


const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const keyword: any = searchParams.get('keyword');
  const correctCount: any = searchParams.get('count');

  return (
    <main
      className="w-screen h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?size=626&ext=jpg&ga=GA1.2.1444344790.1683711147&semt=ais")' }}
    >
      <div className=" bg-opacity-70 p-8 rounded-md animate-fadeIn">
      
        <div className="flex flex-col items-center">
          <div className="mb-4 text-gray-700">
            <FontAwesomeIcon icon={faTrophy} className="text-9xl mb-2 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Congratulations!
        </h1>
          <p className="mb-4 text-lg text-gray-700">{keyword}</p>
          <p className="mb-4 text-3xl text-green-700">
            {correctCount}/20
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Congratulations on completing the quiz!
          </p>
          <Link href="/">
          <button  className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Go Back</button>
          </Link>
        </div>
         
       
      </div>
    </main>
  );
};

export default Page;
