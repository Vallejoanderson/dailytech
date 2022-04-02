import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

export const AddEvent = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(uiOpenModal());
  };

  return (
    <div
      className='text-white flex justify-center border-2 border-stone-800 hover:border-zinc-700 rounded-lg py-2 px-4 cursor-pointer mb-4'
      onClick={openModal}
    >
      <i className='las la-plus pt-1'></i>
      <p className='ml-2 font-semibold text-center tracking-wider'>Add event</p>
    </div>
  );
};
