import React, {useState} from 'react';
import {render} from "react-dom"
import Calendar from "react-calendar"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './components/reportWebVitals';

const ReactCalendar = () =>{
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date)
  }
  return <div>HI!!</div>
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


