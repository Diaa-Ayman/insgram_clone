import { Fragment, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        history.push("/feed");
      }
    });
  }, []);
  const signInHandler = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <div className="">
      <div className="flex items-center justify-center mb-0 mt-20">
        <span className=" font-bold text-2xl drop-shadow-lg text-stone-800">
          Welcome To{" "}
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 ">
            Insgram
          </span>
        </span>
      </div>
      <form
        onSubmit={signInHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 h-4/5 m-auto mt-8"
      >
        <div className="flex justify-between items-center mb-8">
          <span className="text-lg font-bold">Log In</span>
          <img
            className="w-10 h-10"
            src="https://thumbs.dreamstime.com/b/new-instagram-camera-logo-icon-vector-modern-gradient-design-illustrations-white-background-new-instagram-camera-logo-icon-136839821.jpg"
            alt="instga"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />

          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <Link
            to="/signup"
            className="text-blue-500 text-sm font-semibold"
            type="text"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
