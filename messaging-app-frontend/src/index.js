import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';

const container = document.getElementById('root'); // Get the root DOM element
const root = ReactDOM.createRoot(container); // Create a root render container

// Render the App component into the root container
root.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
); 
