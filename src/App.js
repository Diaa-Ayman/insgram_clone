import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
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
      <Route path="/feed">
        <MainPage />
      </Route>
    </Switch>

    // <Signup />
  );
}

export default App;
