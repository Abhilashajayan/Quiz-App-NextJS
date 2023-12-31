"use client"

import React, { useEffect, useState, FC } from "react";
import client from "../axios/axiosConfiq";
import SkeletonLoader from "./Skeltonloading";
import { useSearchParams, useRouter } from 'next/navigation';
import { Question } from './Qustion';

const Page = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedValues, setSelectedValues] = useState<{ [questionId: string]: string }>({});
  const [correctAns, setCorrectAns] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

 
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await client.get('/questions', {
          params: {
            apiKey: process.env.API_KEY,
            limit: 30,
          },
        });

        const extractedQuestions: Question[] = response.data.map((question: any) => {
          const correctAnswer: string | null = Object.entries(question.correct_answers)
            .find(([key, value]) => value === "true")
            ?. [0] || null;

          if (correctAnswer) {
            setCorrectAns((prevCorrectAns: any) => [
              ...prevCorrectAns,
              {
                questionId: question.id,
                correctAnswer,
              },
            ]);
          }
          return {
            ...question,
            correctAnswer,
          };
        });

        setQuestions(extractedQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleSelect = (questionId: string, index: number, key: string) => {
    const newSelectedValues = { ...selectedValues };
    newSelectedValues[questionId] = `${key}_correct`;
    setSelectedValues(newSelectedValues);
  };

  const handleSubmit = () => {
    const correctCount = questions.reduce((count, question) => {
      const selectedValue = selectedValues[question.id];
      const correctAnswer = correctAns.find(ans => ans.questionId === question.id)?.correctAnswer;
      if (selectedValue !== null && correctAnswer !== null && selectedValue === correctAnswer) {
        count += 1;
      }

      return count;
    }, 0);
    router.push(`quiz/result?count=${correctCount}&keyword=${keyword}`);
    console.log(`Correct Answers: ${correctCount}`);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
<div className="w-screen h-full h-screen bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?size=626&ext=jpg&ga=GA1.2.1444344790.1683711147&semt=ais")' }}>
  <h2 className="text-2xl font-bold mb-4 text-center text-black">Quiz Questions</h2>
  {loading ? (
    <SkeletonLoader />
  ) : (
    <div className="flex flex-col items-center p-3 justify-center">
      <div className="mb-6 w-[1000px] h-[400px] ">
        <p className="text-xl font-semibold mb-2 text-black" style={{ height: "60px", overflowY: "auto" }}>{currentQuestion + 1}.{questions[currentQuestion].question}</p>
        <div className="p-2">
          {Object.entries(questions[currentQuestion].answers).map(([key, value]) => (
            <div key={key} className={`flex items-center justify-between ${selectedValues[questions[currentQuestion].id] === `Option ${key}` ? 'bg-blue-200' : ''} p-2 rounded-md my-2  cursor-pointer transition-colors duration-300 hover:bg-blue-100`} onClick={() => handleSelect(questions[currentQuestion].id, currentQuestion, key)}>
              <input
                type="radio"
                name={`question_${currentQuestion}`}
                className="hidden"
                value={key}
                checked={selectedValues[questions[currentQuestion].id] === `Option ${key}`}
                onChange={() => handleSelect(questions[currentQuestion].id, currentQuestion, key)}
              />
              <span className={`text-gray-600 radio-text ${selectedValues[questions[currentQuestion].id] === `Option ${key}` ? 'text-white' : ''}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-between mt-4">
        <button onClick={prevQuestion} className={`btn ${currentQuestion === 0 ? 'btn-disabled' : 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}`} disabled={currentQuestion === 0}>Prev</button>
        <button onClick={nextQuestion} className={`btn ${currentQuestion === questions.length - 1 ? 'btn-disabled' : 'ml-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}`} disabled={currentQuestion === questions.length - 1}>Next</button>
      </div>
      {currentQuestion === 19 && (
        <button
          onClick={handleSubmit}
          type="button"
          className="text-gray-900 bg-gradient-to-r w-[300px] from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
        >
          Submit
        </button>
      )}
    </div>
  )}
</div>
  
  );
};

export default Page;
