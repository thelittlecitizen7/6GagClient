import React, { useState } from 'react';
import NavigatorBar from './components/bar/navBar';
import './App.css'
import MainApp from './components/mainApp/mainApp';
import Login from './components/login/login'

function App() {
  const [name,setName] = useState(localStorage.getItem("name"))
  
  let page;
  
  if ((name !== null )&&(name !== undefined)&&(name !== "undefined")){
    page = (<MainApp setName={setName}/>)
  }
  else{
    page = (<Login setName={setName}/>)
  }
    
  
  return (
     <div className="App">
        {page}
     </div>
  );
}
export default App;
