import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import ReactJSX, {ReactNoJSX} from './components/ReactJSX';
import CompAndProps from "./components/CompAndProps";
import Button from './elements/Button';
import TextInput from './elements/TextInput';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <ReactJSX />
          <ReactNoJSX /> 
          <div className="Components">
            <CompAndProps bgColor="#66ccff"/>
          </div>
          <form action="">
            <TextInput border="red" placeholder="Nama"/>
            <Button background="blue">Kirim</Button>
          </form>

        </header>
      </div>
    </>
  );
}
export default App;
