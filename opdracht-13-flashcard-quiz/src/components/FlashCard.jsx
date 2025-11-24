import { useState } from "react";

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      onClick={() => setShowAnswer(!showAnswer)}
      className="w-64 h-40 bg-white shadow-xl rounded-xl flex items-center justify-center text-center p-4 cursor-pointer border border-gray-300 hover:scale-105 transition-transform duration-200">
      {showAnswer ? (
        <p className="text-xl font-semibold text-green-600">{answer}</p>
      ) : (
        <p className="text-xl font-semibold text-blue-600">{question}</p>
      )}
    </div>
  );
};

export default FlashCard;
