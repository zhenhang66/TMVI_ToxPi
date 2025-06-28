document.addEventListener('DOMContentLoaded', function () {
  // Sample ToxPi scores (radial length) for 26 variables, from tract 48245002100
  const scores = [
    0.2581, 0.9973, 0.0,
    1.0, 0.9362, 0.9085, 0.8215,
    0.6645, 0.6854, 0.2192, 0.6610, 0.7538, 0.8317,
    0.4068, 0.7884, 0.7477, 0.8063, 0.7794, 0.6231,
    0.0, 0.7850, 0.7461, 0.8512, 0.0, 0.9128, 0.8139
  ];

  // Optional: labels for hover
  const labels = [
    "Industrial Zoning", "Impervious Surface", "100-Year Floodplain",
    "Socioeconomic Status", "Household Characteristics", "Racial/Ethnic Minority", "Housing & Transportation",
    "Arthritis", "High Blood Pressure", "Cancer", "Asthma", "Heart Disease", "COPD",
    "Depression", "Diabetes", "Cholesterol", "Obesity", "Stroke", "Teeth Lost",
    "Ozone", "PM2.5", "Diesel PM", "Air Toxics", "Superfund", "TRI Site", "RMP Site"
  ];

  // Placeholder: equal weights (360/26 ≈ 13.846° per slice)
  const totalSlices = scores.length;
  const anglePerSlice = 360 / totalSlices;

  const theta = [];
  const r = [];
  const traceColors = [
    "#e6e6cc", "#b3b34d", "#666600", // Slice 1
    "#ffb3b3", "#ff8080", "#e64d4d", "#b31a1a", // Slice 2
    "#ccffff", "#b3e6e6", "#99cccc", "#80b3b3", "#669999", "#4d8080", "#336666", "#336666", "#003333",
    "#cce6ff", "#b3ccff", "#99b3ff", // Slice 3
    "#e6b3e6", "#cc99cc", "#b380b3", "#996699", "#804d80", "#663366", "#4d1a4d", "#330033" // Slice 4
  ];

  const sectorTraces = [];
  const overlayTheta = [];
  const overlayR = [];

  for (let i = 0; i < totalSlices; i++) {
    const start = i * anglePerSlice;
    const end = start + anglePerSlice;

    // Triangle: center → outer arc → back to center
    const t = [start, end, start];
    const v = [0, scores[i], 0];

    overlayTheta.push((start + end) / 2);
    overlayR.push(scores[i]);

    sectorTraces.push({
      type: 'scatterpolar',
      r: v,
      theta: t,
      fill: 'toself',
      name: labels[i],
      hoverinfo: 'text',
      text: `${labels[i]}<br>Score: ${scores[i].toFixed(2)}`,
      line: { color: traceColors[i], width: 1 },
      fillcolor: traceColors[i],
      showlegend: false
    });
  }

  // Outer polygon trace
  const polygonTrace = {
    type: 'scatterpolar',
    r: [...overlayR, overlayR[0]],
    theta: [...overlayTheta, overlayTheta[0]],
    mode: 'lines',
    name: 'Polygon Overlay',
    line: {
      color: 'black',
      width: 2
    },
    hoverinfo: 'none',
    showlegend: false
  };

  const layout = {
    title: 'ToxPi-style Radial Chart – Tract 48245002100',
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 1]
      },
      angularaxis: {
        tickmode: 'array',
        tickvals: overlayTheta,
        ticktext: labels,
        rotation: 90,
        direction: 'clockwise'
      }
    },
    width: 800,
    height: 800,
    showlegend: false
  };

  Plotly.newPlot('chart', [...sectorTraces, polygonTrace], layout);
});
