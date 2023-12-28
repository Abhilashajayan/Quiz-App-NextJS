"use client"

import { useEffect, useState } from "react";
import axios from "axios";

interface Question {
  id: string;
  question: string;
  answers: {
    answer_a: string,
    answer_b: string,
    answer_c: string,
    answer_d: string,
    answer_e: string,
    answer_f: string,
  };
  correct_answers:{
    answer_a_correct: boolean,
    answer_b_correct: boolean,
    answer_c_correct: boolean,
    answer_d_correct: boolean,
    answer_e_correct: boolean,
    answer_f_correct: boolean,
  }
}



const page = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          params: {
            apiKey: 'WQnUx8t0JuGPsaEja3g9qDFASaP1wAE9akzfbIIY',
            limit: 30,
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

  const handleSelect = (index: number, selectedValue: string) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = `${selectedValue}_correct`;
    setSelectedValues(newSelectedValues);
    console.log(newSelectedValues);
  };
  const handleSubmit = () => {
    const result = questions.map((question, index) => {
      console.log(question.correct_answers);
    
    });
     
  };
  
  
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Quiz Questions</h2>
      <div className="flex justify-center">
        <ul>
          {questions.map((question, index) => (
            <li key={question.id} className="mb-6">
              <p className="text-xl font-semibold mb-2">{index + 1}.{question.question}</p>
              <ul className="p-2 list-disc">
                {Object.entries(question.answers).map(([key, value]) => (
                  <li key={key}>
                    <label className={`flex items-center ${selectedValues[index] === `Option ${key}` ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name={`question_${index}`}
                        className="mr-2"
                        value={key}
                        checked={selectedValues[index] === `Option ${key}`}
                        onChange={() => handleSelect(index, key)}
                      />
                      <span className="text-blue-600">{value}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <button
            onClick={handleSubmit}
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Submit
          </button>
        </ul>
      </div>
      <style jsx>{`
          .selected {
            background-color: #a0aec0;
          }
        `}</style>
    </>
  );
};

export default page;




