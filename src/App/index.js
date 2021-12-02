import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Header from "components/Header";
import Footer from "../components/Footer/footer";

// Exercices
import Profil from 'pages/Profil'
import Pouit from 'pages/Pouit'
import Contest from "pages/Contest";

import Context from "../contexts/AppContext";
import PouitCard from "./../components/PouitCard"

function App() {
  const [pouits, setPouits] = useState([
    { pseudo:'GrenouilleBoarp', date:<p>3/10/2021 à 20:46</p>, content:'Qu\'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan.', id:33, like: false},
    { pseudo:'ManuReact', date:<p>27/03/2021 à 10:39</p>, content:'Où va Messi quand il se blesse ? ... A LA PHARMESSI PTDRRRRR', id: 47, like: false},
    { pseudo:'Flaviie25', date:<p>18/01/2020 à 15:18</p>, content:'Qu\'est-ce qui est bleu, blanc, rouge ? Un Schrtoumph qui saigne du nez.', id:209, like: false}
    ])
  const [myPouits, setMyPouits] = useState([])
  const [pseudo, setPseudo] = React.useState('Pseudo')
  const [newpseudo, setNewPseudo] = React.useState('Pseudo')
  const [description, setDesc] = React.useState('Description')
  const [newdescription, setNewDesc] = React.useState('Description')
  
  const addPouit = (newPouit) => {
    setPouits([newPouit, ...pouits])
    setMyPouits([newPouit, ...myPouits])
  }

  const likePouit = (pouitId) => {
    const index = pouits.findIndex((pouit) => pouit.id === pouitId)
    if (index < 0) return
  
    const newPouits = [...pouits]
    newPouits[index].like = !newPouits[index].like
    setPouits(newPouits)
  }

  return (
    <Context.Provider value={{ pseudo, setPseudo, newpseudo, setNewPseudo, description, setDesc, newdescription, setNewDesc, pouits, myPouits, addPouit, likePouit }}>
      <BrowserRouter>
        <Header />
        <Footer/>
        <Switch>
          <Route exact path="/profil">
            <Profil />
          </Route>
          <Route exact path="/contest">
            <Contest />
          </Route>
          <Route exact path="/pouit">
            <Pouit />
          </Route>
          <Route path="/">
            <Profil />
          </Route>
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
