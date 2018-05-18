import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MyCom from './components/MyCom'
import MyForm from './components/MyForm'
import MyFormData from './components/MyFormData'

ReactDOM.render(<MyFormData/>, document.getElementById('root'));
registerServiceWorker();
