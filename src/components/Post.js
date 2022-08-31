import React, { useEffect, useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import firebase from "firebase";
import {
  BookmarkIcon,
  HeartIcon,
  ShareIcon,
  ChatIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { db } from "../firebase";
import Comment from "./Comment";
function Post({ image, username, caption, timeStamp, postId }) {
  const user = useSelector((state) => state.auth.user);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    // fetch data of comments from server
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          const fetchedComments = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              comment: doc.data(),
            };
          });
          setComments(fetchedComments);
        });
    }
  }, [postId]);

  const addCommentHandler = (event) => {
    event.preventDefault();

    // put comment on server
    db.collection("posts").doc(postId).collection("comments").add({
      comment: comment,
      username: user.displayName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  const toggleCommentsHandler = () => {
    setShowComments((prev) => !prev);
  };

  let changeableWord = "";
  if (showComments) {
    changeableWord = "hide";
  } else {
    changeableWord = "show";
  }
  return (
    <div className="bg-white border py-2 pb-8 md:mb-4 w-full md:w-[400px] min-h-[450px] lg:w-[500px] md:rounded-xl flex flex-col justify-between">
      <header className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-pink-400 text-xl grid place-items-center text-white font-bold w-10 h-10">
            {username && username[0].toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm capitalize">{username}</span>
            {timeStamp ? (
              <span className="text-gray-400 text-xs">
                {new Date(timeStamp?.toDate()).toLocaleString()}
              </span>
            ) : (
              <span className="text-gray-400 text-xs">loading...</span>
            )}
          </div>
        </div>
        <DotsHorizontalIcon className="w-5 h-5 text-gray-600" />
      </header>
      <div className="postImg my-2">
        <img
          src={image}
          alt="publishedImage"
          className="w-full max-h-[550px] object-cover object-top"
        />
      </div>
      <footer>
        <div className="m-2 flex justify-between items-center">
          {caption.length > 0 && (
            <div className="text-sm">
              <span className="font-bold capitalize">{username}</span>
              <span>: </span>
              <span className="font-medium underline text-blue-600">
                {caption}
              </span>
            </div>
          )}
          <div>
            <button
              onClick={toggleCommentsHandler}
              className="text-blue-500 font-medium text-xs hover:underline capitalize"
            >
              {changeableWord} Comments
            </button>
          </div>
        </div>

        {showComments && (
          <div
            id="COMMENTS_SECTION"
            className="m-2 mt-2 overflow-auto max-h-40 scrollbar-hide"
          >
            {comments.map(({ id, comment }) => (
              <Comment
                key={id}
                username={comment.username}
                id={id}
                comment={comment.comment}
                timeStamp={comment.timeStamp}
              />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-2">
            <HeartIcon className="w-7 h-7" />
            <ChatIcon className="w-7 h-7" />
            <ShareIcon className="w-7 h-7" />
          </div>
          <BookmarkIcon className="w-7 h-7" />
        </div>
        <hr className="mt-2" />
        <form
          onSubmit={addCommentHandler}
          id="Comments_Section"
          className="flex items-center mt-2 mx-2 space-x-2"
        >
          <EmojiHappyIcon className="w-7 h-7" />
          <input
            placeholder="Add a comment"
            className="flex-1 py-2 outline-none border-none"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button type="submit" className="text-blue-500 font-medium ">
            Post
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Post;
