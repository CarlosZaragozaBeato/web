import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Charts from "./charts/Charts";

export default function CardBody() {
  const { data } = useContext(Context);
  console.log(data);

  return (
    <div className="card-body">
      <h1>Spending - Last 7 days</h1>
      <div className="charts-body">
        {data.map((e) => (
          <Charts info={e}/>
        ))}
      </div>
      <div className="card-footer">
        <div className="total-month">
          <p>Total this month</p>
          <h2>$478.33</h2>
        </div>
        <div className="total-lstMonth">
          <h4>+2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}
