import React, { useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { uploadActions } from "../store/uploadModalSlice";
function ImageModal(props) {
  const [enteredCaption, setEnteredCaption] = useState("");
  const imageURL = useSelector((state) => state.uploadImage.curImage);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const uploadImageHandler = () => {
    db.collection("posts").add({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: imageURL,
      username: user.displayName ? user.displayName : "USER",
      caption: enteredCaption,
    });
    dispatch(uploadActions.hideImageModal());
    dispatch(uploadActions.getImage(null));
  };

  const hideModalHandler = () => {
    dispatch(uploadActions.hideImageModal());
    dispatch(uploadActions.getImage(null));
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white h-[550px] flex flex-col">
              <div className="flex-1 grid place-items-center">
                {imageURL ? (
                  <img
                    src={imageURL}
                    alt="posted Image"
                    className="w-full h-96 object-contain"
                  />
                ) : (
                  <span className="font-semibold text-lg">Loading...</span>
                )}
              </div>

              <div className="flex overflow-hidden w-vw items-center space-x-2 bg-green-400 ">
                <input
                  onChange={(e) => setEnteredCaption(e.target.value)}
                  placeholder="Enter a Caption!"
                  className="flex-1 outline-none rounded-md p-4 bg-green-400 placeholder-white"
                />
                <button
                  className="p-4 text-white font-medium  hover:bg-green-700 "
                  onClick={uploadImageHandler}
                >
                  UPLOAD
                </button>
                <button
                  className="text-red-600 p-4 text-sm"
                  onClick={hideModalHandler}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;

// Start of Modal in TailwindCSS...

{
  /* <div
class="relative z-10"
aria-labelledby="modal-title"
role="dialog"
aria-modal="true"
> 
<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
DATA ............
        <img src="" alt="posted Image" className=""/>
        <button onClick={uploadImageHandler}>UPLOAD</button>
      </div>
    </div>
  </div>
</div>
</div> */
}
