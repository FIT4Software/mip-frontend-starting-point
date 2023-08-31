import Button from '@components/button/Button';
import { useAppSelector, useAppDispatch, addCounter } from '@store';

function Landing() {
  const { counter } = useAppSelector((state) => state.Landing);
  const dispatch = useAppDispatch();
  const addOne = () => {
    dispatch(addCounter());
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-200">
      <div className="p-40 rounded shadow-lg flex items-center justify-center flex-col gap-6 bg-white relative">
        <p className="w-full border-b border-b-blue-500 text-center font-bold text-2xl uppercase">
          <span className="text-blue-500">MIP</span> Starting Point Project
        </p>
        <Button type="primary" className="w-40" onClick={addOne}>
          Add One
        </Button>
        <div
          className={`absolute bg-blue-500 top-0 right-0 text-white rounded-bl-full overflow-hidden transition-all duration-300 ease-in-out ${
            counter ? 'p-10' : 'p-0'
          }`}
        >
          <span
            className={`absolute top-5 font-bold w-12 overflow-hidden text-ellipsis transition-all duration-75 ease-in-out ${
              counter ? 'text-white' : 'text-transparent'
            }`}
          >
            {counter}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
