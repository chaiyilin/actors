import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'

import ErrorBoundary from './ErrorBoundary'
import App from './actor'

ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root')
);
