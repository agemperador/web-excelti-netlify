import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import './translations/i18n';



ReactDOM.render( 
    <React.StrictMode >
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);