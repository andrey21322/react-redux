import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/context';
import { Provider } from 'react-redux';
import {store} from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <ModalState>
      <App />
    </ModalState>
  </Provider>
)
