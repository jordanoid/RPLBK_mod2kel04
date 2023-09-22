import { useState } from 'react'
import React from 'react';
import './App.css';
import {OpeningJSX} from './components/ReactJSX';
import Profile from "./components/ProfileCard";
import Button from './elements/Button';
import TextInput from './elements/TextInput';


function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nama Anda: ', name);
    setSubmittedName(name);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <OpeningJSX />
        <div className="Components">
          <Profile />
        </div>
        <form action="" onSubmit={handleSubmit}>
            <TextInput border="red" placeholder="Nama" value={name} onChange={handleNameChange} />
            <Button background="blue" type='submit'>Kirim</Button>
        </form>
        {submittedName && (
          <div>
            <p>Halo, {submittedName}. Semoga harimu awokawokaowk</p>
          </div>
        )}
      </header>
    </div>
  );
}
export default App;
