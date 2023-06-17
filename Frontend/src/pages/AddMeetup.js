import AddMeetupForm from "../components/meetups/AddMeetupForm";
import { useNavigate } from "react-router-dom";
import { instanceIp } from "../connections/Instanceip";

const AddMeetup = () => {
  const navigate = useNavigate();
  //NodeJs POST handler
  const meetupDataHandler = (data) => {
    fetch('http://' + instanceIp + ':6543/reports', {
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
