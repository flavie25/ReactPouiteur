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

function App() {
  const [pouits, setPouits] = useState([])
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
