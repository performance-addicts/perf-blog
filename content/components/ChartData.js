import React, { useState, useEffect } from "react";
import Chart from "./Chart";

export default function ChartData({ testId }) {
  const [testData, setTestData] = useState({});
  console.log(testId);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`/.netlify/functions/rigor?id=${testId}`);
      console.log(response);
      const data = await response.json();
      console.log("DATA", data);
      setTestData(data);
    }
    getData();
  }, [testId]);

  if (testData.data && Object.keys(testData.data).length) {
    return <Chart data={testData.data} xAxisKey="time" />;
  }

  return null;
}
