import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import {
  BookmarkIcon,
  HeartIcon,
  ShareIcon,
  ChatIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
function Post({ image }) {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="bg-white border py-2 mb-4 w-full md:w-[400px] lg:w-[500px] rounded-xl">
      <header className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-pink-400 text-xl grid place-items-center text-white font-bold border  w-8 h-8">
            {user ? user.displayName[0].toUpperCase() : <span>..</span>}
          </div>
          <span className="font-semibold text-xs capitalize">
            {user.displayName}
          </span>
        </div>
        <DotsHorizontalIcon className="w-5 h-5 text-gray-600" />
      </header>
      <div className="postImg my-2 w-full">
        <img
          src={image}
          alt="publishedImage"
          className="w-full max-h-[550px] object-contain"
        />
      </div>
      <footer>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-2">
            <HeartIcon className="w-7 h-7" />
            <ChatIcon className="w-7 h-7" />
            <ShareIcon className="w-7 h-7" />
          </div>
          <BookmarkIcon className="w-7 h-7" />
        </div>
        <hr className="mt-2" />
        <div
          id="Comments_Section"
          className="flex items-center mt-2 mx-2 space-x-2"
        >
          <EmojiHappyIcon className="w-7 h-7" />
          <input
            placeholder="Add a comment"
            className="flex-1 py-2 outline-none border-none"
          />
          <button type="submit" className="text-blue-500 font-medium ">
            Post
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Post;
