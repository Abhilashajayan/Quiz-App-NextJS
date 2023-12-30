"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';

const page: React.FC = () => {
  const searchParams = useSearchParams();
  const keyword:any = searchParams.get('keyword');
  const correctCount:any = searchParams.get('count');

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?size=626&ext=jpg&ga=GA1.2.1444344790.1683711147&semt=ais")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      <div className="bg-white bg-opacity-70 p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Quiz Results</h1>
        <div className="flex flex-col items-center">
          <p className="mb-4 text-lg text-gray-700">Participant: {keyword}</p>
          <p className="mb-4 text-lg text-gray-700">Correct Answers: {correctCount}</p>
          <p className="mb-4 text-lg text-gray-700">Congratulations on completing the quiz!</p>
        </div>
      </div>
    </main>
  );
};

export default page;
