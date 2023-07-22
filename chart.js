let labels = [];
    let values = [];
    let chartLabel = '';
    let chartColor = '#ff6384';
    let chartType = 'bar';
    let myChart;

    function addDataPoint() {
      const labelInput = document.getElementById('label');
      const valueInput = document.getElementById('value');

      const label = labelInput.value;
      const value = parseFloat(valueInput.value);

      if (!label || isNaN(value)) {
        alert('Please enter valid data.');
        return;
      }

      labels.push(label);
      values.push(value);

      labelInput.value = '';
      valueInput.value = '';
    }

    function generateChart() {
      if (labels.length === 0 || values.length === 0) {
        alert('Please enter data points before generating the chart.');
        return;
      }

      const ctx = document.getElementById('myChart').getContext('2d');

      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: labels,
          datasets: [{
            label: chartLabel,
            data: values,
            backgroundColor: chartColor,
            borderColor: chartColor,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }