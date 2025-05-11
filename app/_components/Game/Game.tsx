import { useState } from 'react';
import ChoiceButton from '../ChoiceButton/ChoiceButton';
import ResultMessage from '../ResultMessage/ResultMessage';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

type Choice = 'rock' | 'paper' | 'scissors' | null;
type Result = 'win' | 'lose' | 'draw' | null;

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice>(null);
  const [computerChoice, setComputerChoice] = useState<Choice>(null);
  const [gameResult, setGameResult] = useState<'win' | 'lose' | 'draw' | null>(
    null
  );
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (!player || !computer) return null;
    if (player === computer) return 'draw';

    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }

    return 'lose';
  };

  const makeChoice = (choice: 'rock' | 'paper' | 'scissors') => {
    setIsPlaying(true);
    setPlayerChoice(choice);
    setComputerChoice(null);
    setShowResult(false);

    // Simulate computer choice after a delay
    setTimeout(() => {
      const choices: ('rock' | 'paper' | 'scissors')[] = [
        'rock',
        'paper',
        'scissors',
      ];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);

      // Determine winner after a small delay
      setTimeout(() => {
        const result = determineWinner(choice, randomChoice);
        setGameResult(result);
        setShowResult(true);

        // Update score
        if (result === 'win') {
          setScore((prevScore) => prevScore + 1);
        } else if (result === 'lose') {
          setScore((prevScore) => Math.max(0, prevScore - 1));
        }
      }, 500);
    }, 1000);
  };

  const playAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameResult(null);
    setIsPlaying(false);
    setShowResult(false);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 text-center'>
      <div className='max-w-4xl w-full'>
        <div className='flex justify-between items-center border-2 border-gray-300 rounded-lg p-4 mb-12'>
          <div className='text-2xl md:text-3xl font-bold text-[#1a365d]'>
            <h1 className='uppercase'>سنگ، کاغذ، قیچی</h1>
          </div>
          <ScoreBoard score={score} />
        </div>

        <div className='w-[520px] mx-auto min-h-[500px] flex flex-col items-center justify-between'>
          {!isPlaying ? (
            <div className='flex flex-col items-center w-full'>
              <h2 className='text-xl md:text-2xl mb-8 text-gray-600'>
                انتخاب خود را انجام دهید:
              </h2>
              <div className='grid grid-cols-3 gap-6 md:gap-12 w-full'>
                <div onClick={() => makeChoice('rock')}>
                  <ChoiceButton choice='rock' />
                </div>
                <div onClick={() => makeChoice('paper')}>
                  <ChoiceButton choice='paper' />
                </div>
                <div onClick={() => makeChoice('scissors')}>
                  <ChoiceButton choice='scissors' />
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col items-center w-full'>
              <div className='flex justify-around items-center w-full mb-8'>
                <div>
                  <h2 className='text-lg md:text-xl mb-4 text-gray-600'>
                    انتخاب شما
                  </h2>
                  {playerChoice && (
                    <ChoiceButton choice={playerChoice} disabled size='large' />
                  )}
                </div>

                <div>
                  <h2 className='text-lg md:text-xl mb-4 text-gray-600'>
                    انتخاب کامپیوتر
                  </h2>
                  {computerChoice ? (
                    <ChoiceButton choice={computerChoice} disabled size='large' />
                  ) : (
                    <div className='w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center animate-pulse'>
                      <span className='text-gray-500'>در حال انتخاب...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className='h-[180px] flex items-center justify-center w-full'>
                {showResult ? (
                  <ResultMessage result={gameResult} onPlayAgain={playAgain} />
                ) : (
                  <div className='h-[180px]'></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
