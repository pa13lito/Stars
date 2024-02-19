data = [
  {
  type: 'scatterpolar',
  r: [39, 80, 80, 50],
  theta: ["Potencia", "Autonomía", "Velocidad", "Precio"],
  fill: 'toself',
  name: 'Dualtron Ultra-II 72V 40Ah'
  },
  {
  type: 'scatterpolar',
  r: [24, 74, 89, 90  ],
  theta: ["Potencia", "Autonomía", "Velocidad", "Precio"],
  fill: 'toself',
  name: 'NAMI Burn-e 72V'
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 100]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)
