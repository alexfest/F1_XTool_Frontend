/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory, useLocation } from 'react-router-dom';
import BackImage from '../../../assets/back/back_1.svg';
import ButtonImage from '../../../assets/images/but_ready.svg';
import CircleImage from '../../../assets/images/Circle.png';
import BG_OverLay from '../../../assets/back/back_3_overlay.svg';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function ProcessingPage() {
  const history = useHistory();
  const query = useQuery();
  const firstText = query.get('first_text'); // e.g. ?name=John
  const secondText = query.get('second_text'); // e.g. ?name=<John>

  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/print`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name: firstText, second_name: secondText }),
  });

  const handleProcess = () => {
    history.push('/');
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      onClick={handleProcess}
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
