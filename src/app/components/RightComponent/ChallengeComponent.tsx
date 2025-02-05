"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type QuizQuestion = {
  id: number;
  question: string;
  correctAnswer: string;
  choices: string[];
};

const ChallengeComponent: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/challenge");
      if (!response.ok) throw new Error("Failed to fetch questions");
      const data: QuizQuestion[] = await response.json();
      setQuestions(data);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setScore(0);
      setIsFinished(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswer = (choice: string) => {
    setSelectedAnswer(choice);
    if (choice === questions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };

  if (questions.length === 0) return <div className="text-center">Loading...</div>;

  if (isFinished)
    return (
      <Card className="max-w-md mx-auto text-center p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">テスト終了！</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">あなたの点数：{score} / {questions.length}！</p>
          <Button onClick={fetchQuestions} className="mt-4">
            もう一回！！
          </Button>
        </CardContent>
      </Card>
    );

  return (
    <Card className="max-w-md mx-auto p-6">
      <CardHeader>
        <CardTitle>第 {currentQuestionIndex + 1} 問 / {questions.length}</CardTitle>
        <Progress value={(currentQuestionIndex / questions.length) * 100} className="mt-2" />
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold mb-4">{questions[currentQuestionIndex].question}</p>
        <div className="grid grid-cols-2 gap-2">
          {questions[currentQuestionIndex].choices.map((choice, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(choice)}
              className={`p-2 ${
                selectedAnswer
                  ? choice === questions[currentQuestionIndex].correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : ""
              }`}
              disabled={!!selectedAnswer}
            >
              {choice}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeComponent;
