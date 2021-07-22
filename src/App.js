import logo from './logo.svg';
import './App.css';
import Table from './Container/Table'
import {Route , Switch , Redirect, BrowserRouter, NavLink} from 'react-router-dom'
import AddButton from './Component/AddUsers'
import view from './Component/view'
import { Button } from '@material-ui/core';


function App() {
 

  let route = (
 <Switch>
     
    <Route path="/page1"  exact component={AddButton}/>
    <Route path="/" exact component={Table}/>
    <Route path="/page3" exact component={view}/>
  </Switch>

  )
 
  return (
      
      
    <BrowserRouter>
    <div className="App">
    
      <header className="App-header">
   
       {route}
      </header>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
