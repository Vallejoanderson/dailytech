import { FunctionComponent } from 'react';
import { Properties } from 'csstype';

export const Layout: FunctionComponent = ({ children }) => {
  const fullHeight: Properties = {
    height: '100%'
  };
  return (
    <div className='bg-blacked h-screen'>
      <div className='flex justify-between items-center p-2 shadow-lg border-b-2 border-zinc-800'>
        <div className='flex items-center'>
          <a
            href='#main'
            className='pl-2 py-4 ml-4 text-lg font-bold no-underline text-slate-100 hover:text-blue-200'
          >
            daily<span className='text-gray-500 font-normal'>.tech</span>
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
        <div className='w-64 flex flex-col justify-between text-white border-r-2 border-zinc-900 pt-8 text-zinc-400 hidden md:block'>
          <div style={fullHeight}>
            <div className='text-lg mb-2 flex justify-between hover:bg-gray-700 hover:text-slate-50 cursor-pointer px-4 py-1'>
              <div className='flex gap-4'>
                <i className='las la-home la-lg pt-1'></i>
                <p className='font-medium'>My Feed</p>
              </div>
              <i className='las la-sliders-h pt-1'></i>
            </div>
            <div className='text-xs font-extrabold text-base mb-2 px-4 py-1 text-zinc-500'>
              Discover
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='lab la-gripfire la-lg pt-2'></i>
              <p className='font-semibold text-lg'>Popular</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-chevron-up la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Most upvoted</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-comment-dots la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Best discussions</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-search la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Search</p>
            </div>
            <div className='text-xs font-extrabold text-base mb-2 px-4 py-1'>
              Manage
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-bookmark la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Bookmarks</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-history la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Reading history</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-stopwatch la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Focus mode</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-user-cog la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Customize</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-file-alt la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Docs</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-terminal la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Logs</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-comments la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Feedback</p>
            </div>
            <div className='flex gap-2 cursor-pointer px-4 py-1 hover:bg-gray-700 hover:text-slate-50'>
              <i className='las la-user-friends la-lg mt-2'></i>
              <p className='font-semibold text-lg'>Invite people</p>
            </div>
          </div>
        </div>
        <div className='mx-auto mt-4'>{children}</div>
      </div>
    </div>
  );
};
