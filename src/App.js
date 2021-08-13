import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/lista/list";
import Header from "./component/Header";
import Container from "@material-ui/core/Container";

import "./App.css";

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
      </Switch>
    </Container>
  );
}

export default App;
