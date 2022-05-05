import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TodoLayer} from "./context/TodoContext";
import reducer, {initialState} from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TodoLayer initialState={initialState} reducer={reducer}>
          <App />
      </TodoLayer>
  </React.StrictMode>
);