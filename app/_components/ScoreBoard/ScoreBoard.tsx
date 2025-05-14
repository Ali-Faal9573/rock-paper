import React from 'react';

type ScoreBoardProps = {
  score: number;
};

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className='border-2 border-gray-300 rounded-md p-2 sm:p-3 md:p-4 bg-white text-center w-[80px] sm:w-24 md:w-36 shadow-md'>
      <div className='text-[#9f7aea] text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest'>
        Score
      </div>
      <div className='text-[#ed64a6] text-2xl sm:text-3xl md:text-5xl font-bold'>
        {score}
      </div>
    </div>
  );
};

export default ScoreBoard;
