import React from 'react';

type ScoreBoardProps = {
  score: number;
};

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4 bg-white text-center w-28 md:w-36 shadow-md">
      <div className="text-[#9f7aea] text-sm md:text-base font-bold uppercase tracking-widest">Score</div>
      <div className="text-[#1a365d] text-4xl md:text-5xl font-bold">{score}</div>
    </div>
  );
};

export default ScoreBoard; 