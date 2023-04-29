import { useState } from "react";

const ReportsPage = () => {
  //const [isLoading, updateLoading] = useState(true);
  const [loadedData, updateData] = useState([]);
  const [clickHappened, makeIthappen] = useState(false);
  let clickedType = "0";
  const fetchData = (value) => {
    clickedType = value;
    // useEffect(() => {
    fetch("http://localhost:8081/reports")
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
        //updateLoading(false);
      });
    //});
    makeIthappen(true);
  };

  // if (isLoading) {
  //   return (
  //     <section>
  //       <h3>Loading....</h3>
  //     </section>
  //   );
  // }

  if (clickHappened) {
    return (
      <div>
        <p>Reports: {loadedData}</p>
      </div>
    );
  }

  if (!clickHappened) {
    return (
      // <div>
      //   <p>Reports: {loadedData}</p>
      // </div>
      <div>
        <button onClick={() => fetchData("1")}>Premarket</button>
        <button onClick={() => fetchData("2")}>Report 2</button>
        <button onClick={() => fetchData("3")}>Report 3</button>
      </div>
    );
  }
};
export default ReportsPage;
