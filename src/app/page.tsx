"use client"

import { useEffect, useState } from "react";
import axios from "axios";

interface Option {
  answers: string,
}


interface Question {
  id: string;
  question: string;
  answers: string,
   options: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: string;
    answer_f: string;
  };
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          params: {
            apiKey: 'WQnUx8t0JuGPsaEja3g9qDFASaP1wAE9akzfbIIY',
            limit: 10,
          },
        });
        setQuestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <main className="w-screen h-screen">
    <div>
      <h1 className="flex">Welcome</h1>
      <h2>Quiz Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <p>{question.question}</p>
            <ul>
              {questions.map((option) => (
                <li >{option.answers}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </main>
  );
}
