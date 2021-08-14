import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import IndividualMovie from "./components/IndividualMovie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/buscar" component={Search} />

        <Route path="/contacto" component={Contact} />
        <Route path="/sobre-nosotros" component={AboutUs} />
        <Route path={`/pelicula/:id`} component={IndividualMovie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
