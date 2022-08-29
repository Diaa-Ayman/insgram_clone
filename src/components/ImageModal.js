import React from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";
function ImageModal(props) {
  const uploadImageHandler = () => {
    const uploadTask = storage
      .ref(`images/${props.image.name}`)
      .put(props.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // handle progress
      },
      (error) => {
        // handle error
      },
      () => {
        // get URL

        storage
          .ref("images")
          .child(props.image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              imageURL: url,
            });
          });
      }
    );
  };
  return (
    <div
      class="relative z-10"
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
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <button onClick={uploadImageHandler}>UPLOAD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
