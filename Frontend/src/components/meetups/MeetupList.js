import Card from "../ui/Card";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <Card key={meetup.id}>
            <MeetupItem
              title={meetup.title}
              description={meetup.description}
            />
          </Card>
        );
      })}
    </ul>
  );
};

export default MeetupList;
