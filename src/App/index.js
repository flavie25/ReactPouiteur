import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

//Components
import Header from "components/Header";
import Footer from "../components/Footer/footer";

// Pages
import Profil from 'pages/Profil'
import Pouit from 'pages/Pouit'
import Contest from "pages/Contest";

//Contexts
import Context from "../contexts/AppContext";

function App() {

  //Pouits et PouitsContest
  const [pouits, setPouits] = useState([
    { pseudo:'GrenouilleBoarp', date:<p>3/10/2021 à 20:46</p>, content:'Qu\'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan.', id:33, like: false, myPouit: false},
    { pseudo:'ManuReact', date:<p>27/03/2021 à 10:39</p>, content:'Où va Messi quand il se blesse ? ... A LA PHARMESSI PTDRRRRR', id: 47, like: false, myPouit: false},
    { pseudo:'LotusCheat', date:<p>18/01/2020 à 15:18</p>, content:'Qu\'est-ce qui est bleu, blanc, rouge ? Un Schrtoumph qui saigne du nez.', id:209, like: false, myPouit: false}
    ])
  const [pouitsContest, setPouitsContest] = useState([
    { pseudo:'SteakChicken', date:<p>3/10/2021 à 20:46</p>, content:'Quelle mamie fait peur aux voleurs ? Mamie Traillette.', id:1, like: false, myPouit: false},
    { pseudo:'CheatPredator', date:<p>27/03/2021 à 10:39</p>, content:'J\'ai une blague sur les magasins...Mais elle a pas supermarché', id: 145, like: false, myPouit: false},
    { pseudo:'CraftPotato', date:<p>18/01/2021 à 15:18</p>, content:'Pourquoi est-ce c\'est difficile de conduire dans le Nord ? Parce que les voitures arrêtent PAS DE CALER.', id:219, like: false, myPouit: false},
    { pseudo:'ViperFantasy', date:<p>3/10/2021 à 20:46</p>, content:'Pourquoi est-ce qu\'on dit que les bretons sont tous frères et sœurs ? Parce qu\'ils n\'ont Quimper.', id:133, like: false, myPouit: false},
    { pseudo:'JackdanielNever', date:<p>27/03/2021 à 10:39</p>, content:'Pourquoi est-ce qu\'on met tous les crocos en prison ? Parce que les crocos dealent.', id: 747, like: false, myPouit: false},
    { pseudo:'GhostSnake', date:<p>18/01/2020 à 15:18</p>, content:'Quel est le bar préféré des espagnols ? Le Bar-celone', id:29, like: false, myPouit: false},
    { pseudo:'DelaDiabète', date:<p>3/10/2020 à 20:46</p>, content:'Pourquoi est-ce que les mexicains mangent-ils aux toilettes ? Parce qu’ils aiment manger épicé', id:90, like: false, myPouit: false},
    { pseudo:'ManuReact', date:<p>27/03/2020 à 10:39</p>, content:'Que faisaient les dinosaures quand ils n\'arrivaient pas à se décider? Des tirageosaures', id:122, like: false, myPouit: false},
  ])

  //Profil Information 
  const [pseudo, setPseudo] = useState('Pseudo')
  const [newpseudo, setNewPseudo] = useState('Pseudo')
  const [description, setDesc] = useState('Description')
  const [newdescription, setNewDesc] = useState('Description')
  
  //Ajouter un pouit
  const addPouit = (newPouit) => {
    setPouits([newPouit, ...pouits])
  }

  //Supprimer un pouit qu'on a créé
  const deletePouit = (pouitId) => {
    const index = pouits.findIndex((pouit) => pouit.id === pouitId)
    if (index < 0) return

    if(index === 0){
      const endTab = pouits.slice(index + 1, pouits.length + 1)
      setPouits([ ...endTab])
    }
    else{
    const startTab = pouits.slice(0, index)
    const endTab = pouits.slice(index +1 , pouits.length)
    setPouits([...startTab, ...endTab])
    }
  }

  //Liker un pouit
  const likePouit = (pouitId) => {
    const indexPouits = pouits.findIndex((pouit) => pouit.id === pouitId)
    const indexPouitsContest = pouitsContest.findIndex((pouitContest) => pouitContest.id === pouitId)

    if(indexPouits >= 0){
      const newPouits = [...pouits]
      newPouits[indexPouits].like = !newPouits[indexPouits].like
      setPouits(newPouits)
    }

    if(indexPouitsContest>=0){
      const newPouits = [...pouitsContest]
      newPouits[indexPouitsContest].like = !newPouits[indexPouitsContest].like
      setPouitsContest(newPouits)
    } 
  }

  return (
    <Context.Provider value={{ pseudo, setPseudo, newpseudo, setNewPseudo, description, setDesc, newdescription, setNewDesc, pouits, addPouit, likePouit, pouitsContest, deletePouit }}>
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
