import { useState } from "react";
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
    { pseudo:'GrenouilleBoarp', date:'18/01 à 18h18', content:'Qu\'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan.', like: false},
    { pseudo:'ManuReact', date:'18/01 à 18h18', content:'Où va Messi quand il se blesse ? ... A LA PHARMESSI PTDRRRRR', like: false},
    { pseudo:'Flaviie25', date:'27/11 à 10h06', content:'Qu\'est-ce qui est bleu, blanc, rouge ? Un Schrtoumph qui saigne du nez.', like: false}
    ])
  const [pouitLiked, setPouitLiked] = useState([])
  
  const addPouit = (newPouit) => {
    setPouits([newPouit, ...pouits])
  }

  const addPouitLike = (newLike) => {
    setPouitLiked([newLike, ...pouitLiked])
  }

  const likePouit = (pouitId) => {
    const index = pouits.findIndex((pouit) => pouit.id === pouitId)
    if (index < 0) return
  
    const newPouits = [...pouits]
    newPouits[index].like = !newPouits[index].like
    setPouits(newPouits)
    
  }

  // const likePouit = () =>{
  //   if(pouits.like){
  //       pouits.like = false
  //       // console.log(pouits.date)
  //   }
  //   else{
  //       pouits.like = true
  //       // console.log( pouits.like)
  //   }   
  // }

  return (
    <Context.Provider value={{ pouits, addPouit, likePouit }}>
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
