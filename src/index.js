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


// import './card.css';
// import React from 'react';

// function CardComponent({ countryData, index }) { 

//   let countryName = countryData[index].name.common
//   let population = countryData[index].population
//   let region = countryData[index].region
//   let capital = countryData[index].capital
//   let flag = countryData[index].flags.png


//   return (
//     <div className="card">
//       <img src={flag} alt={countryName} />
//       <div className="cardContent">
//         <p className="country">{countryName}</p>
//         <p><span>Population:</span> {population}</p>
//         <p><span>Region:</span> {region}</p>
//         <p><span>Capital:</span> {capital}</p>
//       </div>
//     </div>
//   )
// };
// export default CardComponent;







