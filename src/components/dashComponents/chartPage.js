import React from "react";
import gecko from "./axios";
import BigChart from "./bigChart";
import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const ChartPage = () => {
  const { id } = useParams("bitcoin");
  const [chartsData, setChartsData] = useState(null);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      const data = await gecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "usd",
          days: "1",
        },
      });
      setChartsData(formatData(data.data.prices));
      setDataIsLoading(false);
    };
    fetchData();
  }, []);
  const renderChart = () => {
    if (dataIsLoading) {
      return <div>Loading...</div>;
    }
    return <BigChart chartsData={chartsData} />;
  };
  return renderChart();
};

export default ChartPage;
