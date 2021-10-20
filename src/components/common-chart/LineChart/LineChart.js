import React, { useRef, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-annotation";
import LinearScaleIcon from "@material-ui/icons/LinearScale";

function LineChart(props) {

  const {
    chartData,
    annotations
  } = props;

  const WHITE = "#fff";

  const chartRef = useRef(null);
  const [legend, setLegend] = useState([]);

  useEffect(() => {
    let ref = chartRef.current;
    ref.chartInstance.config.options.legendCallback();
  }, [chartRef]);



let options = {
    responsive: true,
    // maintainAspectRatio : false,
    legend: {
      position: "bottom",
      display: false
    },
    legendCallback: function(chaart) {
      let legendItems = chartRef.current.chartInstance.legend.legendItems;
      setLegend(legendItems);
    },
    tooltips: {
      mode: "label"
    },
    elements: {
      line: {
        // A higher value makes the line look skewed at this ratio.
        tension: 0.3
      },
      point: {
        radius: 0
      }
    },
   
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            // color : "rgba(0,0,0,0)",
            zeroLineWidth : 1,
            zeroLineColor: "#efefef"
          },
          ticks: {
            callback(tick, index) {
              // Jump every 7 values on the X axis labels to avoid clutter.
              return index % 2 !== 0 ? "" : tick;
            },
            maxRotation:0,
            minRotation:0
          },
          scaleLabel: {
            display: true,
            labelString: "",
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize:"16",
            fontFamily : "Lato"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            // color : "rgba(0,0,0,0)",
            zeroLineWidth : 1,
            zeroLineColor: "#efefef"
          },
          ticks: {
            beginAtZero: true,
            callback(tick) {
              if (tick === 0) {
                return tick;
              }
              // Format the amounts using Ks for thousands.
              return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
            }
          },
          scaleLabel: {
            display: true,
            labelString: "",
            fontColor: "#808080",
            fontStyle: "bold",
            fontSize:"16",
            fontFamily : "Lato"
        }
        }
      ]
    },
    hover: {
      mode: "nearest",
      intersect: false
    },
    tooltips :{
      enabled: true,
      mode: 'single',
      // new property from our plugin
      // configure with an array of datasetIndexes that the tooltip should display for
      // to get the datasetIndex, just use it's position in the dataset [] above in the data property
      onlyShowForDatasetIndex: [0, 1],
      callbacks:{
          label : (tooltipItem, data) => {
              return tooltipItem.value;
          }
      }
  },
  annotation: {
    drawTime: 'afterDatasetsDraw',
    annotations: annotations
 }
}

  const listItemStyle = {
    color: "#333",
    listStyle: "none",
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    margin: "2px",
    justifyContent: "center",
    alignItems: "center",
    cursor:"pointer"
  };

  const updateLegend = () =>
    chartRef.current.chartInstance.config.options.legendCallback();

  const getIsHidde = index => {
    let key = Object.keys(
      chartRef.current.chartInstance.config.data.datasets[index]._meta
    )[0];

    let hide =
      chartRef.current.chartInstance.config.data.datasets[index]._meta[key]
        .hidden;

    if (hide === null || hide === false) {
      return false;
    } else {
      return true;
    }
  };

  const setIsHide = index => {
    let key = Object.keys(
      chartRef.current.chartInstance.config.data.datasets[index]._meta
    )[0];
    let isHide =
      chartRef.current.chartInstance.config.data.datasets[index]._meta[key];

    if (getIsHidde(index) === false) {
      isHide.hidden = true;
      updateLegend();
    } else {
      isHide.hidden = false;
      updateLegend();
    }
  };

  const handleClickLegend = (e, i) => {
    let indx = e.currentTarget.value; 
    e.persist();

   setIsHide(indx-1);
   setIsHide(indx);
  };

  return (
    <div>
      <Line
        getDatasetAtEvent={dataset => console.log("dataset", dataset)}
        onElementsClick={e => {
          console.log("e", e);
        }}
        ref={chartRef}
        data={chartData}
        options={options}
      />

      <ul className="mt-8" style={listItemStyle}>
        {legend.length &&
          legend.map((item, key) => {
            const render = () => {
                if(item.text.includes("-dotted")){
                  return null;
                }
                return <li title= {item.text} value={key} onClick={handleClickLegend} style={listItemStyle}>
                            <LinearScaleIcon style={{ color: item.fillStyle,  display: "inline" }} />
                          {item.text}
                        </li>
              }
            return (
              render()
            );
          })}
      </ul>
    </div>
  );
}
export default LineChart;
LineChart.defaultProps = {
  usePointStyle: false,
  position: "bottom",
  tooltipDecimalRound: 1,
  YAfterLabel: "",
  YAxesLabel: "",
  XAxesLabel: "",
  isFetching: false,
  columns: [],
  rows: [[]],
  title: ""
};




