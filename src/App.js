import React from 'react';
import Main from './components/Maincomponent';
import './App.css';
import { configureStore } from './redux/configurestore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
    return ( <
        div >
        <
        Provider store = { store } >
        <
        BrowserRouter >
        <
        Main / >
        <
        /BrowserRouter> <
        /Provider> <
        /div>
    );
}

export default App;