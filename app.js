document.addEventListener('DOMContentLoaded', function () {
  const scores = [
    0.2581, 0.9973, 0.0,
    1.0, 0.9362, 0.9085, 0.8215,
    0.6645, 0.6854, 0.2192, 0.6610, 0.7538, 0.8317,
    0.4068, 0.7884, 0.7477, 0.8063, 0.7794, 0.6231,
    0.0, 0.7850, 0.7461, 0.8512, 0.0, 0.9128, 0.8139
  ];

  const labels = [
    "Industrial Zoning", "Impervious Surface", "100-Year Floodplain",
    "Socioeconomic Status", "Household Characteristics", "Racial/Ethnic Minority", "Housing & Transportation",
    "Arthritis", "High Blood Pressure", "Cancer", "Asthma", "Heart Disease", "COPD",
    "Depression", "Diabetes", "Cholesterol", "Obesity", "Stroke", "Teeth Lost",
    "Ozone", "PM2.5", "Diesel PM", "Air Toxics", "Superfund", "TRI Site", "RMP Site"
  ];

  // Official color palette from your uploaded legend
  const traceColors = [
    "#b41f85", "#b868c4", "#e5d0f3", // Environmental
    "#cb181d", "#ef3b2c", "#fb6a4a", "#fcae91", // Demographics
    "#084594", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef",
    "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#feedde", "#fbb4b9", // Health
    "#a6bddb", "#3690c0", "#0570b0", "#045a8d", "#023858", "#f768a1", "#7a0177"
  ];

  const totalSlices = scores.length;
  const anglePerSlice = 360 / totalSlices;

  const wedgeTraces = [];

  for (let i = 0; i < totalSlices; i++) {
    const startAngle = i * anglePerSlice;
    const endAngle = startAngle + anglePerSlice;
    const midAngle = startAngle + anglePerSlice / 2;

    wedgeTraces.push({
      type: 'scatterpolar',
      r: [0, scores[i], 0],
      theta: [startAngle, endAngle, startAngle],
      fill: 'toself',
      name: labels[i],
      text: `${labels[i]}<br>Score: ${scores[i].toFixed(2)}`,
      hoverinfo: 'text',
      line: { width: 0 },
      fillcolor: traceColors[i],
      showlegend: false
    });
  }

  const layout = {
    title: 'ToxPi-Style Radial Chart – Tract 48245002100',
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 1],
        tickfont: { size: 10 }
      },
      angularaxis: {
        direction: 'counterclockwise',
        rotation: 90,
        tickmode: 'array',
        tickvals: labels.map((_, i) => i * anglePerSlice + anglePerSlice / 2),
        ticktext: labels,
        tickfont: { size: 10 }
      }
    },
    width: 800,
    height: 800,
    margin: { t: 60, b: 60, l: 60, r: 60 }
  };

  Plotly.newPlot('chart', wedgeTraces, layout);

  // Export button (Letter-size @ 300 DPI)
  const exportButton = document.getElementById('exportBtn');
  if (exportButton) {
    exportButton.addEventListener('click', function () {
      Plotly.toImage('chart', {
        format: 'png',
        width: 3300,
        height: 2550,
        scale: 1
      }).then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'toxpi_chart_letter_300dpi.png';
        link.click();
      });
    });
  }
});
