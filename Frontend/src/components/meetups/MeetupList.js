import Card from "../ui/Card";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

// const DUMMY_DATA = [
//   {
//     id: "1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <Card key={meetup.id}>
            <MeetupItem
              title={meetup.title}
              // image={meetup.image}
              // address={meetup.address}
              description={meetup.description}
            />
          </Card>
        );
      })}
    </ul>
  );
};

export default MeetupList;
