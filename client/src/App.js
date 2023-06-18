import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllAuthors from './components/AllAuthors'
import AddAuthor from './components/AddAuthor'
import EditAuthor from './components/EditAuthor'



function App() {
  return (
    <div className="App">
      <h1 style={{color:"#2f76d2", textShadow:"1px 1px lightBlue"}}>www.FavoriteAuthors.com</h1>
      <hr style={{marginBottom:"20px"}}/>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
      <AllAuthors/>
      <br/><hr/>
      <AddAuthor/>
      <br/><hr/>
      <EditAuthor/>
    </div>
  )
}

export default App;
