"use client"

import { useEffect, useState } from "react";
import axios from "axios";

interface Question {
  id: string;
  question: string;
  questionId: string;
  answer : string;
  correctAnswer: string;
  prevCorrectAns:string;
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
  const [selectedValues, setSelectedValues] = useState<{ [questionId: string]: string }>({});
  const [correctAns, setCorrectAns] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          params: {
            apiKey: 'WQnUx8t0JuGPsaEja3g9qDFASaP1wAE9akzfbIIY',
            limit: 30,
          },
        });
        console.log(response.data);
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
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);


  const handleSelect = (questionId: string, index: number, key: string) => {
    const newSelectedValues = { ...selectedValues };
    newSelectedValues[questionId] = `${key}_correct`;
    setSelectedValues(newSelectedValues);
    console.log(newSelectedValues);
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
  
    console.log(`Correct Answers: ${correctCount}`);
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
                  <label className={`flex items-center ${selectedValues[question.id] === `Option ${key}` ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name={`question_${index}`}
                      className="mr-2"
                      value={key}
                      checked={selectedValues[question.id] === `Option ${key}`}
                      onChange={() => handleSelect(question.id, index, key)}
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




