import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import { endpoint } from "../../utils/endpoint.js";

export default function ChartData({ testId, start, end }) {
  const [testData, setTestData] = useState({});
  const prefix = `/.netlify/functions/`;

  let url = `${prefix}rigor?id=${testId}`;

  if (start && end) {
    url = `${prefix}rigor?id=${testId}&start=${start}&end=${end}`;
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
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
