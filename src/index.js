import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<OrderApp />, document.getElementById('root'));
registerServiceWorker();
