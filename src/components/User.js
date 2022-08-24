import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

function User(props) {
  return (
    <div className="flex items-center flex-1">
      <div
        className={`rounded-full bg-gray-400 text-3xl grid place-items-center text-white font-bold border m-2 ${
          props.suggested ? "w-12 h-12" : "w-16 h-16"
        }`}
      >
        {props.user && props.user.displayName[0].toUpperCase()}
      </div>
      <div className="">
        <p className="text-base font-semibold">
          {props.user ? props.user.email : "USER"}
        </p>
        <p className="text-xs">
          {props.user ? props.user.displayName : "USER"}
        </p>
      </div>
    </div>
  );
}

export default User;
