import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Createcar from './component/Createcar';
import Home from './component/Home';
import Book from './component/Book';
import Trans from './component/Trans';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact render={(props) => { return (<Home  {...props} />) }} ></Route>
        <Route path="/Createcar" render={(props) => { return (<Createcar  {...props} />) }} ></Route>
        <Route path="/Book/:car_id" render={(props) => { return (<Book  {...props} />) }} ></Route>
        <Route path="/Trans" render={(props) => { return (<Trans  {...props} />) }} ></Route>
  
      </BrowserRouter>
    </div>
   
  );
}

export default App;
