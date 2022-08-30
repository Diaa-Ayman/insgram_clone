import React, { useRef } from "react";
import insta from "../assets/insta.jpg";
import { auth, storage } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { uploadActions } from "../store/uploadModalSlice";
import {
  HeartIcon,
  SearchIcon,
  ChatIcon,
  PlusCircleIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon, HomeIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";

function Header(props) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const fileInputRef = useRef();
  const signOutHanlder = () => {
    auth.signOut();
    history.replace("/welcome");
  };
  const getImageHandler = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // handle progress
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          // handle error
          console.log(error.message);
        },
        () => {
          // get URL

          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              // db.collection("posts").add({
              //   timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              //   imageURL: url,
              // });
              dispatch(uploadActions.getImage(url));
            });
        }
      );
    }
    dispatch(uploadActions.showImageModal());
  };

  return (
    <div className="bg-white border-b px-4 md:px-8 lg:px-44 py-2 flex justify-between items-center shadow">
      <img className="w-28 h-12" src={insta} alt="insgram word" />
      <div className="bg-gray-200 rounded-lg  items-center py-1 px-2 hidden md:flex lg:flex">
        <SearchIcon className="w-4 h-4 text-gray-500 mr-2" />
        <input placeholder="Search" className=" bg-gray-200 outline-none" />
      </div>
      <div className="">
        <CameraIcon
          onClick={() => fileInputRef.current.click()}
          // onClick={showModalHandler}
          className="w-10 h-10 hover:text-pink-500 border rounded-full p-1 hover:cursor-pointer hover:bg-gray-300 border-gray-300 ease-in transition-all"
        />
        <input
          ref={fileInputRef}
          type="file"
          onChange={getImageHandler}
          className="hidden"
        />
      </div>
      <div className="items-center space-x-6 hidden md:flex ">
        <HomeIcon className="h-7 w-7" />
        <ChatIcon className="h-7 w-7" />
        <PlusCircleIcon className="w-7 h-7" />
        <HeartIcon className="h-7 w-7" />
        <UserCircleIcon className="w-8 h-8 text-gray-400" />
      </div>
      <div className="flex md:hidden space-x-2 ">
        <button
          className="text-blue-500 font-medium text-sm"
          onClick={signOutHanlder}
        >
          Log Out
        </button>
        <div className="rounded-full bg-gray-400 text-xl grid place-items-center text-white font-bold border  w-8 h-8">
          {user ? user.displayName[0].toUpperCase() : <span>..</span>}
        </div>
      </div>
    </div>
  );
}

export default Header;
