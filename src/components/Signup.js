import { useEffect, useState } from "react";
import { auth } from "../firebase";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (user.displayName) {
          //
        } else {
          user.updateProfile({
            displayName: username,
          });
        }

        console.log(user);
      } else {
        console.log("NO user");
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);
  const signupHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        alert(error.message);
        return;
      });
  };

  return (
    <form
      onSubmit={signupHandler}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 h-4/5 m-auto mt-20"
    >
      <div className="flex justify-between items-center mb-8">
        <span className="text-lg font-bold">Sign Up</span>
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
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
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
          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Signup;
