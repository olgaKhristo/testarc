import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [month, setMonth] = useState(new Date().getMonth() + 3); // Set it to current month + 3

    const fetchEvents = useCallback(async () => {
        
        const url = "https://api.arenaracingcompany.co.uk/auth";
        const bearerToken = "264c77f740cc1f02cac8f0a7e30ccdcd2f20dcf5";
        const headers = {
            Authorization: `Bearer ${bearerToken}`,
        };

        let jwt = "";
        try {
            const response = await axios.post(url, null, { headers });
            jwt = response.data;

            // After getting the JWT, make the second API call
            const url2 = `https://api.arenaracingcompany.co.uk/event/month/1318/${month}`;
            const headers2 = {
                Authorization: `Bearer ${jwt}`,
            };
            const response2 = await axios.get(url2, { headers: headers2 });
            console.log("API Response:", response2.data);
            setEvents(response2.data);
        } catch (error) {
            console.error("Failed to access the API:", error.message);
        }
    }, [month]);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    return (
        <div className="display">
            <h2>Events for Month {month}</h2>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="11">November</option>
                <option value="12">December</option>
                {/* Add options for other months */}
            </select>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;




// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const EventList = () => {
//     const [events, setEvents] = useState([]);
//     const [month, setMonth] = useState(new Date().getMonth() + 3); // Set initial month to current month

//     useEffect(() => {
//         fetchEvents();
//     }, [month]);

//     const fetchEvents = async () => {  
//         const url = "https://api.arenaracingcompany.co.uk/auth";
//         const bearerToken = "264c77f740cc1f02cac8f0a7e30ccdcd2f20dcf5";
//         const headers = {
//             Authorization: `Bearer ${bearerToken}`,
//         };

//         let jwt = "";
//         axios
//             .post(url, null, { headers })
//             .then((response) => {
//                 jwt = response.data;
//                 //console.log("API Response:", jwt);

//                 // After getting the JWT, make the second API call
//                 const url2 = `https://api.arenaracingcompany.co.uk/event/month/1318/${month}`;
//                 const headers2 = {
//                     Authorization: `Bearer ${jwt}`,
//                 };
//                 axios
//                     .get(url2, { headers: headers2 }) // Pass headers directly as an object
//                     .then((response2) => {
//                         console.log("API Response:", response2.data);
//                         setEvents(response2.data);
//                     })
//                     .catch((error) => {
//                         console.error("Failed to access the API:", error.message);
//                     });
//             })
//             .catch((error) => {
//                 console.error("Failed to access the API:", error.message);
//             });

//     };

//     return (
//         <div className="display">
//             <h2>Events for Month {month}</h2>
//             <select
//                 value={month}
//                 onChange={(e) => setMonth(e.target.value)}
//             >
//                 <option value="11">November</option>
//                 <option value="12">December</option>
//                 {/* Add options for other months */}
//             </select>
//             <ul>
//                 {events.map((event) => (
//                     <li key={event.id}>{event.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default EventList;
