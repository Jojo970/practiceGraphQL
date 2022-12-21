import React, { Component } from 'react';
import LinkList from './LinkList';
import Header from './Header'
import CreateLink from './CreateLink';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

    return (
      <BrowserRouter>
      <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList/>} />
          <Route
            path="/create"
            element={<CreateLink/>}
          />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
      </BrowserRouter>
    )
  }


export default App;