import Highcharts from "highcharts";
import React, { PureComponent } from "react";

export default class Chart extends PureComponent<any, any> {
  public instance: Highcharts.Chart;
  
  public options = {
    title: {
      text: ""
    },
    series: [
      {
        data: [[this.props.data.Global.TotalConfirmed, "Active"], [this.props.data.Global.TotalRecovered, "Recovered"], [this.props.data.Global.TotalDeaths, "Death"]],
        keys: ["y", "name"],
        type: "pie"
      }
    ]
  };

  public componentDidMount() {
      // @ts-ignore
    this.instance = Highcharts.chart("dummy-id", this.options);
  }

  public render() {
    return (
      <div>
        <div id="dummy-id" />
      </div>
    );
  }
}
