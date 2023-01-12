import React, {useState} from "react";
import User from "./User";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
const array = [1, 2, 3, 4, 5];

function Wedgets() {
  // console.log(props.user);
  const history = useHistory();
  const signOutHanlder = () => {
    auth.signOut();
    history.push("/welcome");
  };
  return (
    <div className="hidden lg:block">
      <div className="userInfo flex items-cetner space-x-20">
        <User />
        <button
          className="text-blue-500 font-medium text-sm"
          onClick={signOutHanlder}
        >
          Log Out
        </button>
      </div>
      <div>
        <div className="mt-4 mb-2 flex items-center justify-between">
          <span className=" text-base text-gray-400 font-bold -tracking-wider">
            Suggestions for you
          </span>
          <button className="font-medium text-sm">See All</button>
        </div>
        <div className="flex flex-col">
          {array.map((ele, index) => (
            <div key={index} className="flex items-center justify-between">
              <User suggested />
              <button className="text-blue-500 font-medium text-sm hover:text-blue-800">
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
