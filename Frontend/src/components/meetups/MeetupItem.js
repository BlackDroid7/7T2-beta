import React from "react";
import Lottie from "react-lottie";
import Moneydata from "../../animations/lotties/money.json";
import Financedate from "../../animations/lotties/finance.json"
import Savingdate from "../../animations/lotties/money-saving.json"
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  let animationData;
  if(props.title === "Admin"){
    animationData = Moneydata;
  }else if(props.title === "Developer"){
    animationData = Financedate;
  }else{
    animationData = Savingdate;
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </li>
  );
};
export default MeetupItem;
