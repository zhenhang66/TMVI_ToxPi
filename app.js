document.addEventListener('DOMContentLoaded', () => {
  const labels = [
    "Industrial Zoning", "Impervious Surface", "100-Year Floodplain",
    "Socioeconomic Status", "Household Characteristics", "Racial/Ethnic Minority", "Housing & Transportation",
    "Arthritis", "High Blood Pressure", "Cancer", "Asthma", "Heart Disease", "COPD",
    "Depression", "Diabetes", "Cholesterol", "Obesity", "Stroke", "Teeth Lost",
    "Ozone", "PM2.5", "Diesel PM", "Air Toxics", "Superfund", "TRI Site", "RMP Site"
  ];

  const scores = [
    0.2581, 0.9973, 0.0,
    1.0, 0.9362, 0.9085, 0.8215,
    0.6645, 0.6854, 0.2192, 0.6610, 0.7538, 0.8317,
    0.4068, 0.7884, 0.7477, 0.8063, 0.7794, 0.6231,
    0.0, 0.7850, 0.7461, 0.8512, 0.0, 0.9128, 0.8139
  ];

  const colors = [
    "#b41f85", "#b868c4", "#e5d0f3",       // Environmental
    "#cb181d", "#ef3b2c", "#fb6a4a", "#fcae91",  // Demographics
    "#084594", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef",
    "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#feedde", "#fbb4b9",  // Health
    "#a6bddb", "#3690c0", "#0570b0", "#045a8d", "#023858", "#f768a1", "#7a0177"
  ];

  // Set default equal weights
  let weights = new Array(labels.length).fill(1);

  const chartDiv = document.getElementById('chart');
  const slidersDiv = document.getElementById('sliders');

  function normalize(arr) {
    const total = arr.reduce((sum, w) => sum + w, 0);
    return arr.map(w => w / total);
  }

  function updateChart() {
    const normWeights = normalize(weights);
    const totalSlices = labels.length;
    const traces = [];

    let currentAngle = 0;

    for (let i = 0; i < totalSlices; i++) {
      const angle = normWeights[i] * 360;
      const theta = [currentAngle, currentAngle + angle, currentAngle];
      const r = [0, scores[i], 0];
    traces.push({
    type: 'scatterpolar',
    mode: 'lines',  
    r: r,
    theta: theta,
    fill: 'toself',
    fillcolor: colors[i],
    line: { width: 0 },
    hoverinfo: 'text',
    name: labels[i],
    text: `${labels[i]}<br>Weight: ${(normWeights[i] * 100).toFixed(1)}%<br>Score: ${scores[i].toFixed(2)}`,
    showlegend: false
    });
      currentAngle += angle;
    }

    const layout = {
      title: 'ToxPi-Style Interactive Radial Chart',
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 1],
          tickfont: { size: 10 }
        },
        angularaxis: {
          direction: 'counterclockwise',
          rotation: 90,
          tickfont: { size: 8 },
          ticks: ''
        }
      },
      width: 800,
      height: 800,
      margin: { t: 60, b: 60, l: 60, r: 60 }
    };

    Plotly.newPlot('chart', traces, layout);
  }

  // Export image
  const exportButton = document.getElementById('exportBtn');
  if (exportButton) {
    exportButton.addEventListener('click', function () {
      Plotly.toImage(chartDiv, {
        format: 'png',
        width: 3300,
        height: 2550,
        scale: 1
      }).then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'interactive_radial_chart_300dpi.png';
        link.click();
      });
    });
  }

  updateChart();
});
