export const FeedListItem = () => {
  const title: string = 'This a title';
  const likes: number = 2;
  const comments: number = 4;
  const mark: number = 6;
  const image: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.GPcq6Np2ltwZGl3z9KdWsgHaEo%26pid%3DApi&f=1';
  return (
    <div className='grid border-2 rounded-2xl border-stone-800 hover:border-zinc-700 pt-8 p-4 w-80 text-lg font-bold cursor-pointer'>
      <i className='las la-ellipsis-v la-lg flex-row-reverse place-self-end text-gray-500 hover:text-white'></i>
      <h3 className='mb-8 px-2 tracking-wide text-gray-300'>{title}</h3>
      <img className='rounded-lg' src={image} alt='post image' />
      <div className='flex justify-between text-gray-400 px-4 mt-4'>
        <div className='hover:bg-green-800 rounded-lg py-1 px-2 hover:text-green-200'>
          <i className='las la-chevron-up la-lg rounded'></i>
          <span className='pl-2'>{likes}</span>
        </div>
        <div className='hover:bg-green-800 rounded-lg py-1 px-2 hover:text-green-200'>
          <i className='las la-comment-dots la-lg rounded'></i>
          <span className='pl-2'>{comments}</span>
        </div>
        <div className='hover:bg-green-800 rounded-lg py-1 px-2 hover:text-green-200'>
          <i className='las la-bookmark la-lg rounded'></i>
          <span className='pl-2'>{mark}</span>
        </div>
      </div>
    </div>
  );
};
