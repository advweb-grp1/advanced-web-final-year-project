
/**
 * Returns a Pie Chart configuration object that can be used to render a pie chart.
 * @param {string} title - The title of the chart.
 * @param {Array<number>} data - The data to be displayed on the chart.
 * @param {Array<string>} labels - The labels to be displayed for each data point.
 * @returns {object} - The configuration object for the pie chart.
 */
export function PieChartBuilder(title, data,labels) {
  return {
    title:title,
    options:{
      series:data,
      chart: {
        type: 'pie',
        width: '100%',
        height:'150%',
        maxWidth: 500
      },
      labels: labels,
      responsive: [{
        breakpoint: 800,
        options: {
          chart: {
            width: 350,
            height:300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    series:data
  };
}
/**

Returns a configuration object for a column chart
@param {string} title - The chart title
@param {array} data - An array of numerical data for the chart
@param {string} label - The name of the data series
@param {array} xaisLabels - An array of x-axis labels
@returns {object} - A configuration object for a column chart
*/
export function ColumnChartBuilder(title,data,label,xaisLabels){
  return {
    title:title,
    options:{
      chart: {
        type: 'bar',
        height:'150%',
        width:'100%'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: xaisLabels
      }
    },
    series:  [
      {
        name:label,
        data: data
      }
    ]
  };
}
/**

Returns a configuration object for a line chart
@param {string} title - The chart title
@param {array} data - An array of numerical data for the chart
@param {string} label - The name of the data series
@returns {object} - A configuration object for a line chart
*/
export function LineChartBuilder(title,data,label,interval = 20){
  return {
    title:title,
    options:{
      chart: {
        type: 'line',
        height:'150%',
        width:'100%'
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category',
        labels: {
          show: true,
          rotate: 0,
          formatter: function(value){
            return (value % interval == 0 || value == 1) ? value : '';
          }
        },
        title: {
          text: 'Participants'
        },
        tooltip: {
          formatter: function(value) {
            return `Partcpant ${value}`;
          }
        }
      }
    },
    series:  [
      {
        name:label,
        data: data
      }
    ]
  };
}
