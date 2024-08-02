import React from "react";
import { Gauge } from "@mui/x-charts/Gauge";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import "./box.css";

const MyBox = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="box-container">
      <div className="box1">
        <div className="text1">
          <h2>100</h2>
          Contact
          <br></br>
          view all Contact
        </div>
        <div className="graph">
          <ChartContainer
            width={170}
            height={140}
            series={[{ data: uData, label: "uv", type: "bar" }]}
            xAxis={[{ scaleType: "band", data: xLabels }]}
          >
            <BarPlot />
          </ChartContainer>
        </div>
        <div>{/* <Chart /> */}</div>
      </div>
      <div className="box2">
        <div className="text2">
          <h2>100</h2>
          Contact<br></br>
          view all Contact
        </div>
        <div className="Circle">
          <Gauge
            value={72}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="100%"
            // ...
          />
        </div>
      </div>
      <div className="box3">
        <div className="text3">
          <span>14</span>
          <div className="passage">Tasks Not Completed View All</div>
        </div>
        <div className="graph">
          <ChartContainer
            width={170}
            height={140}
            series={[{ data: uData, label: "uv", type: "bar" }]}
            xAxis={[{ scaleType: "band", data: xLabels }]}
          >
            <BarPlot />
          </ChartContainer>
        </div>
      </div>
      <div className="box4">
        <div className="text">
          <h2>0</h2>
          Project in Progress <br></br>
          View All
        </div>
        <div className="circle-2">
          <Gauge
            width={90}
            height={65}
            value={65}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="100%"
            // ...
          />
        </div>
      </div>
    </div>
  );
};

export default MyBox;
