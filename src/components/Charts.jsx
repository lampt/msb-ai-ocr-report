import React, { useState, useEffect, useMemo } from 'react';
import { Bar, Bubble, Radar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(...registerables);
ChartJS.register(ChartDataLabels);

// Hook mới: Trì hoãn việc cung cấp DỮ LIỆU cho biểu đồ, thay vì trì hoãn render.
// Đây là cách chuẩn để kích hoạt animation "update" của Chart.js.
const useDelayedData = (fullData, delay = 1200) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

   useEffect(() => {
    const timer = setTimeout(() => {
      setData(fullData);
    }, delay);
    return () => clearTimeout(timer);
  }, [fullData, delay]);

  return data;
};

/**
 * Generic Stacked Bar Chart Component
 * @param {object} data - Chart.js data object ({ labels, datasets })
 */
export const StackedBarChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } },
      datalabels: {
        // Đặt số liệu vào trong lòng bar
        display: (context) => context.dataset.data[context.dataIndex] > 0, // Chỉ hiện khi có giá trị
        color: 'white',
        font: {
          weight: 'bold',
          size: 14
        },
        formatter: (value) => `${value}%`
      }
    },
    scales: { x: { stacked: true, grid: {display: false} }, y: { stacked: true, max: 100, ticks: { callback: v => v + '%' } } },
    animations: {
      // Vertical Bar: Animate giá trị từ 0 để cột mọc từ dưới lên
      y: { 
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(0),
        duration: 1200, easing: 'easeOutQuart', 
        delay: (ctx) => ctx.dataIndex * 150 + ctx.datasetIndex * 100 
      }
    }
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bar options={{...options, ...customOptions}} data={data} />
  );
};

/**
 * Generic Line Chart Component
 * @param {object} data - Chart.js data object ({ labels, datasets })
 * @param {object} customOptions - Custom Chart.js options to merge
 */
export const LineChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } },
      datalabels: { display: false } // Ẩn datalabels cho Line Chart
    },
    scales: { y: { beginAtZero: true, title: { display: true, text: 'Số lượt sử dụng' } } },
    animations: {
      tension: {
        duration: 1500,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false
      }
    }
  }), []);

  const data = useDelayedData(fullData);

  return <Line options={{...options, ...customOptions}} data={data} />;
};

/**
 * Generic Bubble Chart Component
 * @param {object} data - Chart.js data object ({ datasets })
 * @param {object} customOptions - Custom Chart.js options to merge
 */
export const BubbleChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } } },
    scales: { x: { min: 50, max: 100, title: { display: true, text: 'Trí thông minh (IQ) →', font: {weight: 'bold'} } }, y: { min: 0, max: 120, title: { display: true, text: 'An toàn dữ liệu →', font: {weight: 'bold'} } } },
    animations: {
      // Tính toán tọa độ tâm biểu đồ (x=75, y=50) để bong bóng bay tỏa ra từ giữa
      x: { 
        from: (ctx) => ctx.chart.scales.x.getPixelForValue(75), 
        duration: 1000, easing: 'easeOutQuart' 
      },
      y: { 
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(50), 
        duration: 1000, easing: 'easeOutQuart' 
      },
      r: { from: 0, duration: 1500, easing: 'easeOutBounce', delay: (ctx) => ctx.dataIndex * 200 }
    }
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bubble options={{...options, ...customOptions}} data={data} />
  );
};

/**
 * Generic Radar Chart Component
 * @param {object} data - Chart.js data object ({ labels, datasets })
 */
export const RadarChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } },
      datalabels: { display: false } // Ẩn datalabels cho Radar Chart
    },
    scales: { r: { min: 0, max: 10, ticks: { stepSize: 2, display: false, backdropColor: 'transparent' }, pointLabels: { font: { size: 11, weight: 'bold' } } } },
    animation: { 
      duration: 1500, 
      easing: 'easeOutElastic',
      delay: 500
    }
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Radar options={{...options, ...customOptions}} data={data} />
  );
};

/**
 * Generic Horizontal Bar Chart Component
 * @param {object} data - Chart.js data object ({ labels, datasets })
 */
export const HorizontalBarChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } },
      datalabels: {
        display: true,
        color: '#1f2937',
        anchor: 'end',
        align: 'end',
        font: {
          weight: 'bold',
        },
        formatter: (value) => `${value}%`
      }
    },
    indexAxis: 'y',
    scales: { x: { max: 60, ticks: { callback: v => v + '%' } } },
    animations: {
      // Horizontal Bar: Animate trục x để thanh chạy từ trái sang
      x: { from: 0, duration: 1500, easing: 'easeOutQuart', delay: (ctx) => ctx.dataIndex * 300 }
    }
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bar options={{...options, ...customOptions}} data={data} />
  );
};

/**
 * Generic Doughnut Chart Component
 * @param {object} data - Chart.js data object ({ labels, datasets })
 */
export const DoughnutChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { position: 'bottom', labels: { font: { family: 'Montserrat', size: 12 } } },
      datalabels: {
        display: true,
        color: 'white',
        textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)',
        textStrokeColor: 'rgba(0,0,0,0.2)',
        textStrokeWidth: 2,
        font: {
          weight: 'bold',
          size: 16,
        },
      }
    },
    cutout: '60%',
    // Pie/Doughnut: Xòe quạt (Rotate) và KHÔNG phóng to (Scale), có delay
    animation: { 
      animateScale: false, 
      animateRotate: true, 
      duration: 1500, 
      easing: 'easeOutQuart',
      delay: 500
    }
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Doughnut options={{...options, ...customOptions}} data={data} />
  );
};

/**
 * Generic Bar Chart Component
 * @param {object} data - Chart.js data object ({ labels, datasets })
 */
export const BarChart = ({ data: fullData, customOptions = {} }) => {
  const options = useMemo(() => ({
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { display: false },
      datalabels: {
        display: true,
        color: '#4b5563',
        anchor: 'end',
        align: 'end',
        offset: 8,
        font: { weight: 'bold' },
        formatter: (value) => `${value}%`
      }
    },
    scales: { y: { beginAtZero: true, max: 50, ticks: { callback: v => v + '%' } } },
    animations: {
      // Vertical Bar: Animate giá trị từ 0 để cột mọc từ dưới lên
      y: { 
        from: (ctx) => ctx.chart.scales.y.getPixelForValue(0),
        duration: 1200, easing: 'easeOutQuart', delay: (ctx) => ctx.dataIndex * 200 
      }
    }
  }), []);

  const data = useDelayedData(fullData);

  return (
    <Bar options={{...options, ...customOptions}} data={data} />
  );
};
