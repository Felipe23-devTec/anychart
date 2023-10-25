/* Link instalacao
https://www.anychart.com/technical-integrations/samples/react-charts/  : https://www.anychart.com/
comando install : npm install anychart-react anychart, yarn add anychart-react anychart
*/

import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

const data = [
  { x: 40, y: 60, name: "Tom" },
  { x: 300, y: 508, name: "Tim" },
  { x: 900, y: 90, name: "Joao" },
  { x: 800, y: 600, name: "Marcos" },
  { x: 100, y: 30, name: "F" }
];
const quarters = {
    rightTop: {
      fill: "#ccfff2",
      title: {
        text: 'Quadrante 4',
        fontColor: '#03A64A',
        padding: 10,
      }
    },
    rightBottom: {
      fill: "#e6f9ff",
      title: {
        text: 'Quadrante 3',
        fontColor: '#1959F0',
        padding: 10,
      },
    },
    leftTop: {
      fill: "#fff9e6",
      title: {
        text: 'Quadrante 2',
        fontColor: '#F0D632',
        padding: 10,
      },
    },
    leftBottom: {
      fill: "#f9e6ff",
      title: {
        text: 'Quadrante 1',
        fontColor: '#F01511',
        padding: 10,
      },
    },
  };

function QuadrantChart() {
    const chart = anychart.quadrant();
    const dataSet = anychart.data.set(data);
    const markers = chart.marker(dataSet);
  
    chart.xAxis().title('X: Valor Venda');
    chart.yAxis().title('Y: Frequencia');
    chart.yScale().minimum(0);
    chart.yScale().maximum(1000);
    chart.xScale().minimum(0);
    chart.xScale().maximum(1000);
    chart.xAxis().ticks(true);
    chart.xAxis().labels(true);
    chart.yAxis().ticks(true);
    chart.yAxis().labels(true);
  
    markers.labels()
      .enabled(true)
      .fontFamily('Arial')
      .fontColor('#546e7a')
      .position('right')
      .anchor('left-center')
      .offsetX(0)
      .offsetY(0)
      .format('{%name}');
  
    /*markers.listen('pointClick', function(e) {
      var point = e.iterator;
      var xValue = point.get('x');
      var yValue = point.get('y');
      point.annotate([{
        'value': 'X: ' + xValue,
        'fontSize': 12,
        'position': 'top',
      }, {
        'value': 'Y: ' + yValue,
        'fontSize': 12,
        'position': 'right',
      }]);
    });*/
  
    markers.tooltip(true);
  
    chart.quarters(quarters);
  
    return (
      <AnyChart
        width="50%"
        height="400px"
        id="quadrant-chart"
        instance={chart}
      />
    );
  }
  
  export default QuadrantChart;