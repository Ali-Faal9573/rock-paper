import React from 'react';

type ResultMessageProps = {
  result: 'win' | 'lose' | 'draw' | null;
  onPlayAgain: () => void;
};

const ResultMessage: React.FC<ResultMessageProps> = ({
  result,
  onPlayAgain,
}) => {
  if (!result) return null;

  const messages = {
    win: 'You won!',
    lose: 'You lost!',
    draw: 'Draw!',
  };

  return (
    <div className='bg-white rounded-lg p-4 sm:p-6 text-center shadow-2xl w-[224px] sm:w-64 md:w-80 flex flex-col items-center border-1 border-gray-200'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#1a365d]'>
        {messages[result]}
      </h2>
      <button
        onClick={onPlayAgain}
        className='bg-[#9f7aea] hover:bg-opacity-80 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full 
        text-base sm:text-lg uppercase tracking-wide transition-colors duration-200'>
        Play again
      </button>
    </div>
  );
};

export default ResultMessage;
