var timeChart = null;
var snapshotChart = null;

var joyColor = 'rgb(75, 192, 192)';
var sorrowColor = 'rgb(54, 162, 235)';
var angerColor = 'rgb(255, 99, 132)';
var surpriseColor = 'rgb(255, 205, 86)';

function addDataToChart(joy, sorrow, anger, surprise) {
  timeChart.data.datasets[0].data.push(joy);
  timeChart.data.datasets[1].data.push(sorrow);
  timeChart.data.datasets[2].data.push(anger);
  timeChart.data.datasets[3].data.push(surprise);

  timeChartConfig.data.labels.push(i);
  timeChart.update();

  snapshotChart.data.datasets[0].data = [joy];
  snapshotChart.data.datasets[1].data = [sorrow];
  snapshotChart.data.datasets[2].data = [anger];
  snapshotChart.data.datasets[3].data = [surprise];
  snapshotChart.update();
}

$(document).ready(function() {
  var timeChartCtx = document.getElementById("time-chart").getContext('2d');
  timeChart = new Chart(timeChartCtx, timeChartConfig);

  var snapshotContext = document.getElementById("snapshot-chart").getContext('2d');
  snapshotChart = new Chart(snapshotContext, snapshotConfig)
});


var snapshotConfig = {
  type: 'horizontalBar',
  data: {
    datasets: [{
      label: 'joy',
      backgroundColor: joyColor,
      borderColor: joyColor,
      fill: true,
    }, {
      label: 'sorrow',
      fill: false,
      backgroundColor: sorrowColor,
      borderColor: sorrowColor,
    }, {
      label: 'anger',
      fill: false,
      backgroundColor: angerColor,
      borderColor: angerColor,
    }, {
      label: 'surprise',
      fill: false,
      backgroundColor: surpriseColor,
      borderColor: surpriseColor,
    }]
  },
  options: {
    responsive: true,
    hover: {
      mode: 'nearest',
      intersect: true
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          max: 1,
          min: 0,
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Liklihood'
        }
      }]
    }
  }
};

var timeChartConfig = {
  type: 'line',
  data: {
    datasets: [{
      label: 'joy',
      backgroundColor: joyColor,
      borderColor: joyColor,
      fill: false,
    }, {
      label: 'sorrow',
      fill: false,
      backgroundColor: sorrowColor,
      borderColor: sorrowColor,
    }, {
      label: 'anger',
      fill: false,
      backgroundColor: angerColor,
      borderColor: angerColor,
    }, {
      label: 'surprise',
      fill: false,
      backgroundColor: surpriseColor,
      borderColor: surpriseColor,
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Emotional State'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Liklihood'
        },
        ticks: {
          max: 1,
          min: 0,
        }
      }]
    }
  }
};


