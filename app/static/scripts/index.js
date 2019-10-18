console.log("Testing");
//index.js
import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./BarChart";
import BoxPlot from "./BoxPlot";
import PieChart from "./PieChart";
import PieChart2 from "./PieChart2";
import Finance from "./Finance";
import HelloWorld from "./HelloWorld";

console.log("Rendering App")
// Uncomment next 4 lines to view: http://127.0.0.1:5000/chart_examples
// ReactDOM.render(<BarChart />, document.getElementById("barchart-app"));
// ReactDOM.render(<BoxPlot />, document.getElementById("boxplot-app"));
// ReactDOM.render(<PieChart />, document.getElementById("piechart-app"));
// ReactDOM.render(<PieChart2 />, document.getElementById("piechart2-app"));

// Uncomment this line to view Finance:
ReactDOM.render(<Finance />, document.getElementById("finance-app"));


// ReactDOM.render(<HelloWorld />, document.getElementById("hello-world-app"));
