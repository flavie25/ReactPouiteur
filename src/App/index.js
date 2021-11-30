import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";
import Footer from "../components/Footer/footer";

// Exercices
import Profil from 'pages/Profil'
import Pouit from 'pages/Pouit'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer/>
      <Switch>
        <Route exact path="/profil">
          <Profil />
        </Route>
        <Route exact path="/pouit">
          <Pouit />
        </Route>
        <Route path="/">
          <Profil />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
