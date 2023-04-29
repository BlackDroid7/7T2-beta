import AddMeetupForm from "../components/meetups/AddMeetupForm";
import { useNavigate } from "react-router-dom";

const AddMeetup = () => {
  const navigate = useNavigate();

  //firebase POST handler
  // const meetupDataHandler = (data) => {
  //   fetch("https://sevent2-demo-default-rtdb.firebaseio.com/meetup.json", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(navigate("/"));
  // };

  //NodeJs POST handler
  const meetupDataHandler = (data) => {
    fetch("http://localhost:8081/reports", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(navigate("/reports"));
  };

  return (
    <section>
      <AddMeetupForm sendMeetupData={meetupDataHandler} />
    </section>
  );
};
export default AddMeetup;
