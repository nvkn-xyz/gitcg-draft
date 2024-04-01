import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DeckStateManager } from './UI/deck_state_manager';
import { SocialsRenderer } from './Socials/socials_renderer';
import { DescriptionContextState } from './UI/Description/description_context';
import { DescriptionRenderer } from './UI/Description/description_renderer';

function App() {
  return (
    <DescriptionContextState>
      <div className="App">
        <header className="App-header">
          <h2>Genius Invokation Drafter (v0.2)</h2>
          <label style={{fontSize: '20px'}}>New: click on any card to read description!</label>
          <DeckStateManager/>
          <br/>
          <SocialsRenderer/>
          <DescriptionRenderer/>
        </header>
      </div>
    </DescriptionContextState>
  );
}

export default App;
