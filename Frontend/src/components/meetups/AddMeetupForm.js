import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./AddMeetupForm.module.css";
//import userEvent from "@testing-library/user-event";

const AddMeetupForm = (props) => {
  //preMarket state hooks
  const [reportType, setReportType] = useState("pre_post")

  //Dropdown change handler
  const dropdownChange = (event) => {

      if(event.target.value === "1" || event.target.value === "2"){
        setReportType("pre_post")
      }else if(event.target.value === "3" || event.target.value === "4"){
        setReportType("wee_mon")
      }else if(event.target.value === "5"){
        setReportType("wee_cal")
      }else if(event.target.value === "6"){
        setReportType("stock")
      }else{
        setReportType("mutual")
      }

  };

  //POST data
  const typeInput = useRef();
  const titleInput = useRef();
  const descInput = useRef();
  const reportDate = useRef();
  const stockNoteInput = useRef();
  const tradeOpportunityInput = useRef();
  const globalQuestionInput = useRef();
  const domesticQuestionInput = useRef();
  const comInflationAnalysisInput = useRef();
  const cbcAnalysisInput = useRef();
  const fdActivityInput = useRef();
  const openIntPcrAnalysisInput = useRef();
  const majorEventsInput = useRef();
  const ssSpecificInput = useRef();
  const techFunInput = useRef();
  const conclusionsInput = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const typeInputValue = typeInput.current.value;
    const titleInputValue = titleInput.current.value;
    const descInputValue = (reportType === "pre_post") ? descInput.current.value : null;
    const reportDateValue = reportDate.current.value;
    const stockNoteInputValue = (reportType === "stock") ? stockNoteInput.current.value : null;
    const tradeOpportunityInputValue = (reportType === "stock") ? tradeOpportunityInput.current.value : null;
    const globalQuestionInputValue = (reportType === "wee_mon") ? globalQuestionInput.current.value : null;
    const domesticQuestionInputValue = (reportType === "wee_mon") ? domesticQuestionInput.current.value : null;
    const comInflationAnalysisInputValue = (reportType === "wee_mon") ? comInflationAnalysisInput.current.value : null;
    const cbcAnalysisInputValue = (reportType === "wee_mon") ? cbcAnalysisInput.current.value : null;
    const fdActivityInputValue = (reportType === "wee_mon") ? fdActivityInput.current.value : null;
    const openIntPcrAnalysisInputValue = (reportType === "wee_mon") ? openIntPcrAnalysisInput.current.value : null;
    const majorEventsInputValue = (reportType === "wee_mon") ? majorEventsInput.current.value : null;
    const ssSpecificInputValue = (reportType === "wee_mon") ? ssSpecificInput.current.value : null;
    const techFunInputValue = (reportType === "wee_mon") ? techFunInput.current.value : null;
    const conclusionsInputValue = (reportType === "wee_mon") ? conclusionsInput.current.value : null;

    let meetupData = {};
    if(reportType === "pre_post"){
      meetupData = {
        type: typeInputValue,
        title: titleInputValue,
        description: descInputValue,
        date: reportDateValue
      }
    }else if(reportType === "wee_mon"){
      //add report format here
      meetupData = {
        type: typeInputValue,
        title: titleInputValue,
        globalQuestion: globalQuestionInputValue,
        domesticQuestion: domesticQuestionInputValue, 
        comInflationAnalysis: comInflationAnalysisInputValue,
        cbcAnalysis: cbcAnalysisInputValue,
        fdActivity: fdActivityInputValue,
        openIntPcrAnalysis: openIntPcrAnalysisInputValue,
        majorEvents: majorEventsInputValue,
        ssSpecific: ssSpecificInputValue,
        techFun: techFunInputValue,
        conclusions: conclusionsInputValue,
        date: reportDateValue
      }
    }else if(reportType === "wee_cal"){
      //add report format here
    }else if(reportType === "stock"){
      meetupData = {
        type: typeInputValue,
        title: titleInputValue,
        stockNoteValue: stockNoteInputValue,
        tradeOpportunityValue: tradeOpportunityInputValue,
        date: reportDateValue
      }

    }else if(reportType === "mutual"){
      //add json template here
    }
    props.sendMeetupData(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="Report Type">Report Type</label>
          <select onChange={dropdownChange} ref={typeInput}>
            {/* <option value="0">Default</option> */}
            <option value="1">Pre Market</option>
            <option value="2">Post Market</option>
            <option value="3">Weekly Report</option>
            <option value="4">Monthly Report</option>
            <option value="5">Weekly Calendar</option>
            <option value="6">Stock Report</option>
            <option value="7">Mutual Funds</option>
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
        {(reportType === "pre_post") ? (<div className={classes.control}>
          <label htmlFor="description">Content</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descInput}
          ></textarea>
        </div>) : null }
        {(reportType === "stock") ? (<div className={classes.control}>
          <label htmlFor="stockNoteValue">Stock Note</label>
          <textarea
            id="stockNoteValue"
            required
           // rows="5"
            ref={stockNoteInput}
          ></textarea>
        </div>) : null}
        {(reportType === "stock") ? (<div className={classes.control}>
          <label htmlFor="tradeOpportunityValue">Trade Opportunity</label>
          <textarea
            id="tradeOpportunityValue"
            required
           // rows="5"
            ref={tradeOpportunityInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="globalQuestionValue">Global Queues: </label>
          <textarea
            id="globalQuestionValue"
            required
           // rows="5"
            ref={globalQuestionInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="domesticQuestionValue">Domestic Queues: </label>
          <textarea
            id="domesticQuestionValue"
            required
           // rows="5"
            ref={domesticQuestionInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="comInflationAnalysisValue">Commodities and Inflation Analysis.</label>
          <textarea
            id="comInflationAnalysisValue"
            required
           // rows="5"
            ref={comInflationAnalysisInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="cbcAnalysisValue">Currency, Bond, and Crypto Analysis.</label>
          <textarea
            id="cbcAnalysisValue"
            required
           // rows="5"
            ref={cbcAnalysisInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="fdActivityValue">FII and DII activity.</label>
          <textarea
            id="fdActivityValue"
            required
           // rows="5"
            ref={fdActivityInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="openIntPcrAnalysisValue">Open Interest and PCR analysis.</label>
          <textarea
            id="openIntPcrAnalysisValue"
            required
           // rows="5"
            ref={openIntPcrAnalysisInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="majorEventsValue">Major Events in the upcoming week.</label>
          <textarea
            id="majorEventsValue"
            required
           // rows="5"
            ref={majorEventsInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="ssSpecificValue">Sector and Stock specific expectations.</label>
          <textarea
            id="ssSpecificValue"
            required
           // rows="5"
            ref={ssSpecificInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="techFunValue">Techno - Fundamental analysis</label>
          <textarea
            id="techFunValue"
            required
           // rows="5"
            ref={techFunInput}
          ></textarea>
        </div>) : null }
        {(reportType === "wee_mon") ? (<div className={classes.control}>
          <label htmlFor="conclusionsValue">Conclusion.</label>
          <textarea
            id="conclusionsValue"
            required
           // rows="5"
            ref={conclusionsInput}
          ></textarea>
        </div>) : null }
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default AddMeetupForm;
