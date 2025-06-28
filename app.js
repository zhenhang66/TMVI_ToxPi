document.getElementById('weightForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const weights = Array.from(form.elements)
    .filter(el => el.type === 'range')
    .map(el => ({
      label: el.name,
      value: parseFloat(el.value)
    }));

  const data = [{
    type: 'scatterpolar',
    r: weights.map(w => w.value),
    theta: weights.map(w => w.label),
    fill: 'toself'
  }];

  const layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 1]
      }
    },
    showlegend: false
  };

  Plotly.newPlot('chart', data, layout);
});
