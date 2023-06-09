import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import { instanceIp } from "../connections/Instanceip"

const AllMeetupPage = () => {
  const [isLoading, updateLoading] = useState(true);
  const [loadedData, updateData] = useState([]);
  useEffect(() => {
    //fetch("https://sevent2-demo-default-rtdb.firebaseio.com/meetup.json")
    // {headers: {
    //   "access-control-allow-origin" : "*",
    //   'Content-Type': 'application/json'
    // }}
    fetch('http://' + instanceIp + ':6543/team')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key.id,
            ...data[key],
          };
          meetups.push(meetup);
        }
        updateLoading(false);
        updateData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h3>Loading....</h3>
      </section>
    );
  }
  return <MeetupList meetups={loadedData} />;
};
export default AllMeetupPage;
