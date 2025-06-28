import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Semaforo from './components/Semaforo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Semaforo />);
