import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

function User(props) {
  return (
    <div className="flex items-center flex-1">
      <UserCircleIcon
        className={
          props.suggested
            ? "w-12 h-12 text-gray-300"
            : "w-16 h-16 text-gray-300"
        }
      />
      <div className="">
        <p className="text-base font-semibold">abogamel001</p>
        <p className="text-xs">Diaa Ayman</p>
      </div>
    </div>
  );
}

export default User;
