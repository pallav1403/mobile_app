import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react'
import './App.css';
import './components/All.css'
import Home from './components/Home';
import Login from './components/Login';
import ShowMobile from './components/ShowMobile';


function App() {
  return (
    <div className="App">
    
    <Router>
       
   
       
       
       <Switch>
         <Route exact path="/" component={Home}/>
        
         <Route  exact path="/login" component={Login}/>
         <Route  exact path="/logout" component={Home}/>
         <Route  exact path="/showmobile" component={ShowMobile}/>

       
       </Switch>
       
       
       
       
       
       
       </Router>



    </div>
  );
}

export default App;
