// File: Question.ts
export interface Question {
    id: string;
    question: string;
    questionId: string;
    answer: string;
    correctAnswer: string;
    prevCorrectAns: string;
    keyword: string;
    answers: {
      answer_a: string;
      answer_b: string;
      answer_c: string;
      answer_d: string;
      answer_e: string;
      answer_f: string;
    };
    correct_answers: {
      answer_a_correct: boolean;
      answer_b_correct: boolean;
      answer_c_correct: boolean;
      answer_d_correct: boolean;
      answer_e_correct: boolean;
      answer_f_correct: boolean;
    };
  }
  

 