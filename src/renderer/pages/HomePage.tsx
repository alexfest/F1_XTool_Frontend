/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory } from 'react-router-dom';
// import { Bot as Bottle } from 'lucide-react';
// import Logo from '../components/Logo';
// import TouchButton from '../components/TouchButton';
import BackImage from '../../../assets/back/back_1.svg';
import ButtonImage from '../../../assets/images/but_start.svg';
import CircleImage from '../../../assets/images/Circle.png';
import BG_OverLay from '../../../assets/back/back_1_overlay.svg';

export default function HomePage() {
  const history = useHistory();

  const handleStart = () => {
    history.push('/personalize');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      onClick={handleStart}
    >
      <div
        className="relative overflow-hidden"
        style={{
          height: '100vh',
          width: 'min(100vw, 56.25vh)',
        }}
      >
        <img className="w-full h-full absolute" src={BackImage} alt="back" />
        <img
          className="w-full h-full absolute"
          src={CircleImage}
          alt="circle"
        />
        <img
          className="absolute"
          style={{
            width: '92%',
            height: '92%',
            left: '4%',
            top: '4%',
          }}
          src={BG_OverLay}
          alt="bg_overlay"
        />
        <img
          className="h-full absolute"
          style={{
            width: '60%',
            left: '20%',
          }}
          src={ButtonImage}
          alt="bg_overlay"
        />
      </div>
    </div>
  );
}
