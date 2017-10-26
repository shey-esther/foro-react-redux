import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "redux-zero/react";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

const Foro = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Foro />, document.getElementById('root'));
registerServiceWorker();
