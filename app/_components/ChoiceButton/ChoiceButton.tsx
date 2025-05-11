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
      ? 'w-[112px] h-[112px] sm:w-32 sm:h-32 md:w-40 md:h-40'
      : 'w-[80px] h-[80px] sm:w-24 sm:h-24 md:w-32 md:h-32';

  const innerSizeClasses =
    size === 'large'
      ? 'w-[80px] h-[80px] sm:w-24 sm:h-24 md:w-30 md:h-30'
      : 'w-[60px] h-[60px] sm:w-20 sm:h-20 md:w-24 md:h-24';

  const imageSizeClasses = size === 'large'
    ? { width: 60, height: 60 }
    : { width: 60, height: 60 };

  return (
    <div
      className={`choice-btn ${choice} ${sizeClasses} ${disabled ? 'opacity-70 cursor-default' : ''
        }`}
      onClick={!disabled ? onClick : undefined}>
      <div className={`choice-inner ${innerSizeClasses}`}>
        <Image
          src={choiceToImage[choice]}
          alt={choice}
          width={imageSizeClasses.width}
          height={imageSizeClasses.height}
        />
      </div>
    </div>
  );
};

export default ChoiceButton;
