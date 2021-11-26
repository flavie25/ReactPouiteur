import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";
import Footer from "../components/Footer/footer";

// Exercices
import FirstComponentExercice from 'exercices/FirstComponent'
import StylingComponentsExercice from 'exercices/StylingComponents'
import SpotifyExercice from 'exercices/Spotify'
import ContextsExercice from 'exercices/Contexts'
import Profil from 'exercices/Profil'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer/>
      <Switch>
        <Route exact path="/profil">
          <Profil />
        </Route>
        <Route exact path="/first-component">
          <FirstComponentExercice />
        </Route>
        <Route exact path="/styling-components">
          <StylingComponentsExercice />
        </Route>
        <Route exact path="/spotify">
          <SpotifyExercice />
        </Route>
        <Route exact path="/contexts">
          <ContextsExercice />
        </Route>
        <Route path="/">
          <FirstComponentExercice />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
