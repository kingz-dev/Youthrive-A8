import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
// import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RecoilRoot>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </RecoilRoot>
  </React.StrictMode>,
)
