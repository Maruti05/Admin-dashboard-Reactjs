import "../Card/Card.css";

import React from "react";
import { useState } from "react";
import { AnimateSharedLayout ,motion} from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard data={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard data={props} setExpanded={() => setExpanded(true)} />
      )}
      <div className="card"></div>
    </AnimateSharedLayout>
  );
};

const CompactCard = ({ data, setExpanded }) => {
  const Icon = data.icon;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: data.color.backGround,
        boxShadow: data.color.boxShadow,
      }}
      layoutId='exapandableCard'
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar value={data.barValue} text={`${data.barValue}%`} />
        <span>{data.title}</span>
      </div>
      <div className="detail">
        <Icon />
        <span>${data.value}</span>
        <span>Last 24 hr</span>
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ data, setExpanded }) => {
  const op = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLables: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: data.color.backGround,
        boxShadow: data.color.boxShadow,
      }}
      layoutId='exapandableCard'
    >
      <div className="closeOp">
        <UilTimes onClick={setExpanded}  />
      </div>
      <span>{data.title}</span>
      <div className="chartContainer">
        <Chart series={data.series} type="area" options={op.options} />
      </div>
      <span>Last 24 hr</span>
    </motion.div>
  );
};

export default Card;
