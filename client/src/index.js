import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
// import store from './store';
import App from './app';
import Reducer from './Reducer'
import { createStore } from 'redux';

const store = createStore(Reducer);

ReactDOM.render(
       <Provider store={store}>
        <Router>
           <App />
        </Router>
       </Provider>,


document.getElementById("root"));


