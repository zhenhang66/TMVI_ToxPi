document.getElementById('weightForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const sliders = Array.from(document.querySelectorAll('input[type=range]'));
  
  const rawValues = sliders.map(slider => ({
    label: slider.name,
    value: parseFloat(slider.value)  // Keep as 0–100 for UI
  }));

  const total = rawValues.reduce((sum, item) => sum + item.value, 0);
  const normalized = rawValues
    .filter(item => item.value > 0)
    .map(item => ({
      label: item.label,
      value: total > 0 ? (item.value / total) : 0
    }));

  const labels = normalized.map(item => item.label);
  const values = normalized.map(item => item.value);
  const colors = labels.map((_, i) => `hsl(${i * (360 / labels.length)}, 60%, 60%)`);

  const data = [{
    type: 'pie',
    labels: labels,
    values: values,
    textinfo: 'label+percent',
    marker: { colors: colors },
    hole: 0.3
  }];

  const layout = {
    title: 'CD-TMVI Weighted Pie Chart',
    height: 600,
    width: 800
  };

  Plotly.newPlot('chart', data, layout);
});
