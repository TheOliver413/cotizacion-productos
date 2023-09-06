import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Components/Landing/Landing';
import Home from "./Components/Home/home";
import CrearCotizacion from "./Components/CrearCotizacion/CrearCotizacion";
import Page404 from "./Components/Page404/Page404";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cotizar" component={CrearCotizacion} />
        <Route path='*' component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;