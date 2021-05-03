//
import { HashRouter, Switch, Route } from "react-router-dom";

//pages
import { SearchPage, LoginPage, NotFoundPage, PrivateRoute } from "./pages";

//components
import Modal from "./components/Modal";

const App = () => {
  //
  return (
    <HashRouter>
      <Switch>
        <PrivateRoute path="/" exact component={SearchPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Modal />
    </HashRouter>
  );
};

export default App;
