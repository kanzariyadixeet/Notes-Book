
import React, { useContext } from 'react'
import './App.css'
import Intput from './components/Intput'
import { ContextApi } from './ContextApi'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {



  return (
    <>
      <ContextApi>
        <Intput />
      </ContextApi>
    </>
  )
}

export default App
