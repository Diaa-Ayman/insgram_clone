import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => {
      unSub();
    };
  }, []);
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="welcome" />
      </Route>
      <Route path="/welcome">
        <SigninPage />
      </Route>

      <Route path="/signup">
        <SignupPage />
      </Route>

      {user && (
        <Route path="/feed">
          <MainPage />
        </Route>
      )}
    </Switch>

    // <Signup />
  );
}

export default App;
