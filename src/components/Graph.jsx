import React from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tomoto', 'Onion', 'Chilli', 'Wheat', 'Rice'],
        datasets: [
          {
            label: 'Consumption capacity',
            data: [100, 60, 50, 20, 10], 
            backgroundColor: [
              '#FE5B3E', 
              '#B73D53', 
              '#E32227', 
              '#F5DEB3', 
              '#FAF5EF', 
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
            title: {
              display: true,
              text: 'Vegetables',
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Consumtion capacity',
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width={500} height={300} style={{ backgroundColor: '#334B35' }} />;
};

export default Graph;
