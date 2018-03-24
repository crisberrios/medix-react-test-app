import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MediatorProvider} from './MediatorProvider';
import * as appContext from './appContext';

const MediatorApp = () => (
    <MediatorProvider {...appContext}>
        <App />
    </MediatorProvider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MediatorApp />, div);
});
