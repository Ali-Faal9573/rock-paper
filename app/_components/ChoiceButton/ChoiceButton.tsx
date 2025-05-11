import Image from 'next/image';
import React from 'react';

type ChoiceButtonProps = {
  choice: 'rock' | 'paper' | 'scissors';
  onClick?: () => void;
  disabled?: boolean;
  size?: 'normal' | 'large';
};

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  choice,
  onClick,
  disabled = false,
  size = 'normal',
}) => {
  const choiceToImage = {
    rock: '/rock.svg',
    paper: '/paper.svg',
    scissors: '/scissors.svg',
  };

  const sizeClasses =
    size === 'large'
      ? 'w-32 h-32 md:w-40 md:h-40'
      : 'w-24 h-24 md:w-32 md:h-32';

  const innerSizeClasses =
    size === 'large'
      ? 'w-24 h-24 md:w-30 md:h-30'
      : 'w-20 h-20 md:w-24 md:h-24';

  return (
    <div
      className={`choice-btn ${choice} ${sizeClasses} ${
        disabled ? 'opacity-70 cursor-default' : ''
      }`}
      onClick={!disabled ? onClick : undefined}>
      <div className={`choice-inner ${innerSizeClasses}`}>
        <Image
          src={choiceToImage[choice]}
          alt={choice}
          width={size === 'large' ? 60 : 40}
          height={size === 'large' ? 60 : 40}
        />
      </div>
    </div>
  );
};

export default ChoiceButton;
