import React from 'react';
import {render} from "react-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const ReactCalendar = () =>{
  
  return <div>Your events are getting loaded</div>
}
render(
  <ReactCalendar />, document.querySelector("#root")
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


