import React from "react";
import User from "./User";

const array = [1, 2, 3, 4, 5];

function Wedgets() {
  return (
    <div className="hidden lg:block">
      <div className="userInfo flex items-cetner space-x-20">
        <User />
        <button className="text-blue-500 font-medium text-sm">Switch</button>
      </div>
      <div>
        <div className="mt-4 mb-2 flex items-center justify-between">
          <span className=" text-base text-gray-400 font-bold -tracking-wider">
            Suggestions for you
          </span>
          <button className="font-medium text-sm">See All</button>
        </div>
        <div className="flex flex-col">
          {array.map((ele) => (
            <div className="flex items-center justify-between">
              <User suggested />
              <button className="text-blue-500 font-medium text-sm">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wedgets;
