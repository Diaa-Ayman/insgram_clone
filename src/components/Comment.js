import React from "react";

function Comment({ username, id, comment }) {
  return (
    <div className="comment mb-1 flex items-start space-x-1">
      <span className="text-xs font-bold capitalize">{username}</span>
      <span className="text-sm flex-1">: {comment}</span>
    </div>
  );
}

export default Comment;
