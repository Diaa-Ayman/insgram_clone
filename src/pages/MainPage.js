import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Wedgets from "../components/Wedgets";
import { auth } from "../firebase";

function MainPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unSub();
    };
  }, [user]);

  return (
    <div className="">
      <Header user={user} />

      <div className="bg-gray-100 lg:px-52 md:px-20 px-8 py-4 flex space-x-8 min-h-screen">
        <Feed />
        <Wedgets user={user} />
      </div>
    </div>
  );
}

export default MainPage;
