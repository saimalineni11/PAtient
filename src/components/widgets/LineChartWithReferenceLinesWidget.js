import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card } from "react-bootstrap";

import LinearScaleIcon from "@material-ui/icons/LinearScale";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import "./widgets.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
const listItemStyle = {
  color: "#333",
  listStyle: "none",
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
  margin: "2px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="mt-8" style={listItemStyle}>
      {payload.map((entry, index) =>
        // console.log(entry)

        !entry.value.startsWith("Dash-") ? (
          <li title={entry.value} value={entry.value} style={listItemStyle}>
            <LinearScaleIcon
              style={{ color: entry.color, display: "inline" }}
            />
            {entry.value}
          </li>
        ) : null
      )}
    </ul>
  );
};

export default (props) => {
  const {
    classNames,
    data,
    chartName,
    referenceLineX,
    dataKeyPv,
    dataKeyUv,
    colorPv,
    colorUv,
    dataKeyXName,
  } = props;

  return (
    <Card border="light" className={"shadow-sm " + classNames}>
      <Card.Body>
        <Row
          className="d-block d-xl-flex align-items-center"
          style={{ margin: "5px" }}
        >
          <Col>
            <h6 style={{ marginBottom: "0px" }}>
              {chartName}{" "}
              <i
                className="fas fa-info-circle"
                style={{ color: "#6FC2B4" }}
              ></i>
            </h6>
          </Col>
        </Row>

        <LineChart
          width={380}
          height={180}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid /> */}
          <XAxis dataKey={dataKeyXName} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderLegend} />
          <ReferenceLine x={referenceLineX} stroke="#D0D0CE" label="" />
          {/* <ReferenceLine y={9800} label="Max" stroke="red" /> */}
          {/* <Line type="monotone" dataKey={dataKeyPv} stroke={colorPv} />
          <Line type="monotone" dataKey={dataKeyUv}  stroke={colorUv} /> */}

          <Line
            type="monotone"
            dataKey={dataKeyPv}
            strokeWidth={2}
            stroke={colorPv}
          />
          <Line
            type="monotone"
            dataKey={"Dash-" + dataKeyPv}
            stroke={colorPv}
            strokeWidth={2}
            strokeDasharray="5 5"
          />

          <Line
            type="monotone"
            dataKey={dataKeyUv}
            stroke={colorUv}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey={"Dash-" + dataKeyUv}
            stroke={colorUv}
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </Card.Body>
    </Card>
  );
};
