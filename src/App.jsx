import { useState } from 'react'
import Header from './assets/Header/Header'
import Main from './assets/Main/Main'
import Footer from './assets/Footer/Footer'

import './App.css'

function App() {

  return (
    <div className="App" >
      <Header title="My header" subtitle="subtitle2" />
      {/* <Main message="My content" /> */}
      <Footer title="My header" subtitle="subtitle2" />
    </div>
  )
}

export default App
