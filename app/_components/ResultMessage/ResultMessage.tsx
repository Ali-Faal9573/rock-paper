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
    win: 'شما برنده شدید!',
    lose: 'شما باختید!',
    draw: 'مساوی!',
  };

  return (
    <div className='bg-white rounded-lg p-6 text-center shadow-lg w-64 md:w-80 flex flex-col items-center'>
      <h2 className='text-4xl font-bold mb-4 text-[#1a365d]'>
        {messages[result]}
      </h2>
      <button
        onClick={onPlayAgain}
        className='bg-[#9f7aea] hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-full 
        text-lg uppercase tracking-wide transition-colors duration-200'>
        بازی دوباره
      </button>
    </div>
  );
};

export default ResultMessage;
