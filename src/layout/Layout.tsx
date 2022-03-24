import { FunctionComponent } from 'react';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className='bg-blacked'>
      <div className='flex justify-between items-center p-2 shadow-lg border-b-2 border-zinc-800'>
        <div className='flex items-center'>
          <a
            href='#main'
            className='pl-2 py-2 ml-4 text-md font-bold no-underline text-slate-100 hover:text-blue-200'
          >
            daily.tech
          </a>
        </div>
        <button
          type='button'
          className='bg-slate-100 py-1 px-3 text-gray-900 hover:bg-blue-200 rounded mr-4'
        >
          Sign up
        </button>
      </div>
      <div className='flex'>
        <div className='w-60 h-screen text-white border-r-2 border-zinc-900 px-9 pt-8'>
          <div>My feed</div>
          <div className='text-xs font-extrabold text-neutral-500'>
            Discover
          </div>
          <div>Popular</div>
          <div>Most upvoted</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
