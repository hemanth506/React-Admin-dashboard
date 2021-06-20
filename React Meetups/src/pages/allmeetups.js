import Meetuplist from "../components/meetups/meetuplist";

import { useState, useEffect } from "react";

function Allmeetupspage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData , setLoadedData] = useState([]);

  useEffect(() => {

    setIsLoading(true);

    fetch("https://react-db-abce9-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = []

      for (const key in data) {
        const meetup = {
          id : key,
          ...data[key]
        };
        meetups.push(meetup)
      }
      // When we have the data useState isset to false
      setIsLoading(false);
      // set the data to setLoadedData 
      setLoadedData(meetups);
    });

  }, []);

  
  

  if(isLoading){
    return (
      <section>
        <div>Loading..</div>
      </section>
    );
  }

  return (
    <section>
      <h2>All Meetups</h2>
      <Meetuplist meetups={loadedData} />
    </section>
  );
}

export default Allmeetupspage;
