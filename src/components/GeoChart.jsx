import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import data from "../data/geoData.json";

const GeoChart = () => {
  const [convertedData, setConvertedData] = useState([
    ["Country", "Data Usage"],
  ]);

  useEffect(() => {
    dataConvert(data);
  }, []);

  const dataConvert = (data) => {
    for (let i = 0; i < data.length; i++) {
      let array = [];
      array.push(data[i].region);
      array.push(data[i].data);
      setConvertedData((prev) => [...prev, array]);
    }
  };

  return (
    <Chart
      chartType="GeoChart"
      width="95%"
      height="90vh"
      data={convertedData}
      style={{ margin: "20px" }}
    />
  );
};

export default GeoChart;
