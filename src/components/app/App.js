import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "../Card/card";


function App() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function mainData() {
      const response = await fetch(
        `https://api.arenaracingcompany.co.uk/event/month/1318/{month number}`
      );
      const countryData = await response.json();
      console.log(countryData);
      setCountryData(countryData);
    }

    mainData();
  }, []);

  return (
    <>
      
      <div className="App">
        {Array.isArray(countryData) && (
          Array.from({ length: 8 }, (_, index) => (
            <CardComponent
              key={index}
              countryData={countryData}
              index={index + 19}
            />
          ))
        )}

       
      </div>
    </>
  );
}

export default App;



// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
