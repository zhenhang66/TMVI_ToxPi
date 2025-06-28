document.getElementById('weightForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const sliders = Array.from(document.querySelectorAll('input[type=range]'));
  const rawData = sliders.map(slider => ({
    label: slider.name,
    value: parseFloat(slider.value)
  }));

  const total = rawData.reduce((sum, item) => sum + item.value, 0);
  const filtered = rawData.filter(item => item.value > 0);

  const labels = filtered.map(item => item.label);
  const values = filtered.map(item => total > 0 ? (item.value / total * 100).toFixed(2) : 0);

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
    title: 'Weighted CD-TMVI Pie Chart',
    height: 600,
    width: 800
  };

  Plotly.newPlot('chart', data, layout);
});
