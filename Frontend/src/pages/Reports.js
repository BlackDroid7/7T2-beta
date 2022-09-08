import { useEffect, useState } from "react";

const ReportsPage = () => {
  const [isLoading, updateLoading] = useState(true);
  const [loadedData, updateData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.2.2:8081/reports")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let reports = "";
        for (const key in data) {
          const report = JSON.stringify(data[key]);
          reports +=
            "***************************************************************************************************************************************************";
          reports += "\n";
          reports += report + "\n";
        }

        updateData(reports);
        updateLoading(false);
      });
  });

  if (isLoading) {
    return (
      <section>
        <h3>Loading....</h3>
      </section>
    );
  }

  return (
    <div>
      <p>Reports: {loadedData}</p>
    </div>
  );
};
export default ReportsPage;
