import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Main from './components/Main'

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
