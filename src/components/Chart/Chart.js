import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const valuesOfMonth = props.dataPoints.map((dataPoint) => dataPoint.value);
  const max = Math.max(...valuesOfMonth);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={max}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
