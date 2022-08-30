import React from "react";
import { useSelector } from "react-redux";
function User(props) {
  const user = useSelector((state) => state.auth.user);

  const isUser = user && !props.suggested;
  return (
    <div className="flex items-center flex-1">
      <div
        className={`rounded-full bg-red-400 text-3xl grid place-items-center text-white font-bold  m-2 ${
          props.suggested ? "w-12 h-12" : "w-16 h-16"
        }`}
      >
        {isUser ? user.displayName[0].toUpperCase() : <span>U</span>}
      </div>
      <div className="">
        <p className="text-base font-semibold">
          {isUser ? user.email : "user@user.com"}
        </p>
        <p className="text-xs">{isUser ? user.displayName : "user user"}</p>
      </div>
    </div>
  );
}

export default User;
