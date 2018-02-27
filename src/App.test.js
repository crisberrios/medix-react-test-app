import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MediatorProvider } from './initContext';

const MediatorApp = () => (
    <MediatorProvider>
        <App />
    </MediatorProvider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediatorApp />, div);
});
