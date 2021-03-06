import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

const MOUNT_ELEMENT = document.getElementById('root');

ReactDOM.render(<App />, MOUNT_ELEMENT); // Mounter Function of react renderer, which mounts the App React component on DOM
