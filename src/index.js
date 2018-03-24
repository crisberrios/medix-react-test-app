import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as appContext from './appContext';
import { MediatorProvider } from './MediatorProvider';

const MediatorApp = () => (
    <MediatorProvider {...appContext}>
        <App />
    </MediatorProvider>
);

ReactDOM.render(<MediatorApp />, document.getElementById('root'));

