import './card.css';
import React from 'react';



function CardComponent({ countryData, index }) {
  //const {countryData} = props

  let countryName = countryData[index].name.common
  let population = countryData[index].population
  let region = countryData[index].region
  let capital = countryData[index].capital
  let flag = countryData[index].flags.png


  return (
    <div className="card">
      <img src={flag} alt={countryName} />
      <div className="cardContent">
        <p className="country">{countryName}</p>
        <p><span>Population:</span> {population}</p>
        <p><span>Region:</span> {region}</p>
        <p><span>Capital:</span> {capital}</p>
      </div>
    </div>
  )
};
export default CardComponent;




// import React, {useState} from 'react';
// import {render} from "react-dom"
// import Calendar from "react-calendar"
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from '../app/App';
// import reportWebVitals from '../reportWebVitals';

// const ReactCalendar = () =>{
//   const [date, setDate] = useState(new Date());
//   const onChange = date => {
//     setDate(date)
//   }
//   return <div>HI!!</div>
// }
// render(
//   <ReactCalendar />, document.querySelector("#root")
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
