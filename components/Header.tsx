'use client';
import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import Avatar from 'react-avatar';
function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-grey-500/10 rounded-b-2xl">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
          alt="logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-intital"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" placeholder="text" className="flex-2 outline-none p-2" />
            <button hidden type="submit">
              search
            </button>
          </form>

          <Avatar name="Advitya" round size="50" color="#0055D1" />
        </div>
      </div>
    </header>
  );
}

export default Header;
