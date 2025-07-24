import { useLocation, useHistory } from 'react-router-dom';
import BackImage from '../../../assets/back/back_2_1.svg';
import './style.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function ConfirmMorePage() {
  const history = useHistory();
  const query = useQuery();
  const firstText = query.get('first_text'); // e.g. ?name=John

  console.log(firstText);

  const onYes = () => {
    history.push(`/personalize?first_text=${firstText}`);
  };

  const onNo = () => {
    history.push(`/processing?first_text=${firstText}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="relative overflow-hidden"
        style={{
          height: '100vh',
          width: 'min(100vw, 56.25vh)',
        }}
      >
        <img className="w-full h-full absolute" src={BackImage} alt="back" />
        <div style={{
            position: 'absolute',
            top: '45vh',
            color: '#000000ee',
            width: '100%',
            textAlign: 'center',
            fontSize: 21,
            fontWeight: 'bold',
            fontFamily: 'coke',
            wordSpacing: '1.5px',
          }}
        >
          Would you like to proceed with printing another name?
        </div>
        <div className="flex gap-16 justify-center mt-6 absolute w-full" style={{top: '50vh'}}>
          <button
            onClick={onYes}
            className="px-6 py-3 rounded-2xl shadow-md bg-green-100 text-green-800 font-semibold text-lg hover:bg-green-200 transition-all duration-200 hover:scale-105"
          >
            ✅ Yes
          </button>
          <button
            onClick={onNo}
            className="px-6 py-3 rounded-2xl shadow-md bg-red-100 text-red-800 font-semibold text-lg hover:bg-red-200 transition-all duration-200 hover:scale-105"
          >
            ❌ No
          </button>
        </div>
      </div>
    </div>
  );
}
