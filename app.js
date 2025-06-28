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

  const weights = Array(26).fill(1); // Equal weighting

  const colors = [
    "#b41f85", "#b868c4", "#e5d0f3",
    "#cb181d", "#ef3b2c", "#fb6a4a", "#fcae91",
    "#084594", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef",
    "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#feedde", "#fbb4b9",
    "#a6bddb", "#3690c0", "#0570b0", "#045a8d", "#023858", "#f768a1", "#7a0177"
  ];

  const normWeights = (() => {
    const sum = weights.reduce((a, b) => a + b, 0);
    return weights.map(w => w / sum);
  })();

  const traces = [];
  let angleStart = 0;

  for (let i = 0; i < labels.length; i++) {
    const angle = normWeights[i] * 360;
    const theta = [
      angleStart,
      angleStart,
      angleStart + angle,
      angleStart + angle
    ];
    const r = [0, scores[i], scores[i], 0];

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
      text: `${labels[i]}<br>Score: ${scores[i].toFixed(2)}`,
      showlegend: false
    });

    angleStart += angle;
  }

  const layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 1],
        tickfont: { size: 10 }
      },
      angularaxis: {
        rotation: 90,
        direction: 'counterclockwise',
        tickfont: { size: 8 },
        ticks: ''
      }
    },
    width: 800,
    height: 800,
    margin: { t: 50, b: 50, l: 50, r: 50 }
  };

  Plotly.newPlot('chart', traces, layout);

  document.getElementById('exportBtn').addEventListener('click', () => {
    Plotly.toImage(document.getElementById('chart'), {
      format: 'png',
      width: 3300,
      height: 2550,
      scale: 1
    }).then(url => {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cd_tmvi_radial_chart.png';
      link.click();
    });
  });
});
