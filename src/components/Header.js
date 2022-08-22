import React from "react";
import insta from "../assets/insta.jpg";
import {
  HeartIcon,
  SearchIcon,
  ChatIcon,
  PlusCircleIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon, HomeIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <div className="bg-white border-b px-4 md:px-8 lg:px-44 py-2 flex justify-between items-center shadow">
      <img className="w-28 h-12" src={insta} alt="insgram word" />
      <div className="bg-gray-200 rounded-lg  items-center py-1 px-2 hidden md:flex lg:flex">
        <SearchIcon className="w-4 h-4 text-gray-500 mr-2" />
        <input placeholder="Search" className=" bg-gray-200 outline-none" />
      </div>
      <div className="">
        <CameraIcon className="w-10 h-10 hover:text-pink-500 border rounded-full p-1 hover:cursor-pointer hover:bg-gray-300 border-gray-300 ease-in transition-all" />
        <input type="file" className="hidden" />
      </div>
      <div className="flex items-center space-x-6">
        <HomeIcon className="h-7 w-7" />
        <ChatIcon className="h-7 w-7" />
        <PlusCircleIcon className="w-7 h-7" />
        <HeartIcon className="h-7 w-7" />
        <UserCircleIcon className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
}

export default Header;
