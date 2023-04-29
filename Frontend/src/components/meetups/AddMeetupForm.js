import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./AddMeetupForm.module.css";

const AddMeetupForm = (props) => {
  //preMarket state hooks
  const [preMarketState, preMarketStateChange] = useState(false);

  //Dropdown change handler
  const dropdownChange = (event) => {
    event.target.value === "1"
      ? preMarketStateChange(true)
      : preMarketStateChange(false);
  };

  //POST data
  const typeInput = useRef();
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descInput = useRef();
  const reportDate = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const typeInputValue = typeInput.current.value;
    const titleInputValue = titleInput.current.value;
    const imageInputValue = preMarketState ? null : imageInput.current.value;
    const addressInputValue = preMarketState ? null : addressInput.current.value;
    const descInputValue = descInput.current.value;
    const reportDateValue = reportDate.current.value;

    const meetupData = preMarketState ? {
      type: typeInputValue,
      title: titleInputValue,
      description: descInputValue,
      date: reportDateValue,
    } : {
      type: typeInputValue,
      title: titleInputValue,
      image: imageInputValue,
      address: addressInputValue,
      description: descInputValue,
      date: reportDateValue,
    };
    props.sendMeetupData(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="Report Type">Report Type</label>
          <select onChange={dropdownChange} ref={typeInput}>
            <option value="0">Default</option>
            <option value="1">Pre Market</option>
            <option value="2">Report 2</option>
            <option value="3">Report 3</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Content Title</label>
          <input type="text" required id="title" ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Date">Date</label>
          <input type="date" required id="repDate" ref={reportDate}></input>
        </div>
        {preMarketState ? null : (
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image" ref={imageInput} />
          </div>
        )}
        {preMarketState ? null : (
          <div className={classes.control}>
            <label htmlFor="address">Oneliner</label>
            <input type="text" required id="address" ref={addressInput} />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="description">Content</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descInput}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default AddMeetupForm;
