import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
// import store from './store';
import App from './app';
import Reducer from './Reducer'
import {legacy_createStore as createStore } from 'redux';

const store = createStore(Reducer);

ReactDOM.render(
   <React.StrictMode>
       <Provider store={store}>
        
           <App />
        
       </Provider>
   </React.StrictMode>,


document.getElementById("root"));


