import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageModal from "./components/ImageModal";
import { authActions } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  // const [openModal, setOpenModal] = useState(false);
  const modalShown = useSelector((state) => state.uploadImage.showModal);
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
      dispatch(authActions.getCurrentUser(authUser));
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <div>
      {modalShown && <ImageModal />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="welcome" />
        </Route>
        <Route path="/welcome">
          <SigninPage />
        </Route>

        <Route path="/signup">
          {!user ? (
            <SignupPage />
          ) : (
            <div className="grid place-items-center mt-32 text-lg font-bold">
              <span> YOU NEED TO LOG OUT FIRST TO GET TO THIS BAGE</span>
            </div>
          )}
        </Route>

        {user && (
          <Route path="/feed">
            <MainPage />
          </Route>
        )}
      </Switch>
    </div>
    // <Signup />
  );
}

export default App;
