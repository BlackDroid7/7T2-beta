import { useState } from "react";
import { instanceIp } from "../connections/Instanceip"

const ReportsPage = () => {
  const [loadedData, updateData] = useState([]);
  const [clickHappened, makeIthappen] = useState(false);
  let clickedType = "0";
  const fetchData = (value) => {
    clickedType = value;
    fetch('http://' + instanceIp + ':6543/reports')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let reports = "";
        for (const key in data) {
          if (data[key].type === clickedType) {
            let report = "";
            report = JSON.stringify(data[key]);
            reports +=
              "***************************************************************************************************************************************************";
            reports += "\n";
            reports += report + "\n";
          }
        }

        updateData(reports);
      });
    makeIthappen(true);
  };

  if (clickHappened) {
    return (
      <div>
        <p>Reports: {loadedData}</p>
      </div>
    );
  }

  if (!clickHappened) {
    return (
      <div>
        <button onClick={() => fetchData("1")}>Pre Market</button>
        <button onClick={() => fetchData("2")}>Post Market</button>
        <button onClick={() => fetchData("3")}>Weekly Report</button>
        <button onClick={() => fetchData("4")}>Monthly Report</button>
        <button onClick={() => fetchData("5")}>Weekly Calendar</button>
        <button onClick={() => fetchData("6")}>Stock Report</button>
        <button onClick={() => fetchData("7")}>Mutual Funds</button>
      </div>
    );
  }
};
export default ReportsPage;

