import React, { useState, useEffect } from "react";
import Photo from './Photo'
import axios from 'axios'
import "./App.css";

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photo />
    </div>
  );
}

export default App;
