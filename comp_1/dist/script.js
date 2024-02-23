data = [
  {
  type: 'scatterpolar',
  r: [90, 95, 87, 70, 67, 74, 70, 95],
  theta: ["Aceleración", "Frenado", "Rendimiento en subidas", "Autonomía", "Precio", "Maniobrabilidad", "Servicio Técnico", "Velocidad"],
  fill: 'toself',
  name: '<b>Dualtron Ultra-II 72V 40Ah</b>',
  hovertemplate: "<b>%{theta}</b><br>%{r} Puntos</br>",
  textposition: "middle left"
  },
  {
  type: 'scatterpolar',
  r: [80, 74, 78, 90, 60, 70, 60, 90],
  theta: ["Aceleración", "Frenado", "Rendimiento en subidas", "Autonomía", "Precio", "Maniobrabilidad", "Servicio Técnico", "Velocidad"],
  fill: 'toself',
  name: '<b>NAMI Burn-e 72V</b>',
  hovertemplate: "<b>%{theta}</b><br>%{r} Puntos</br>",
  textposition: "middle left"
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 100]
    }
  }, showlegend: true
}

var config = {
  modeBarButtonsToRemove: ["autoScale2d", "autoscale", "editInChartStudio", "editinchartstudio", "hoverCompareCartesian", "hovercompare", "lasso", "lasso2d", "orbitRotation", "orbitrotation", "pan", "pan2d", "pan3d", "select", "select2d", "sendDataToCloud", "senddatatocloud", "tableRotation", "tablerotation", "toImage", "toggleHover", "toggleSpikelines", "togglehover", "togglespikelines", "toimage", "zoom", "zoom2d", "zoom3d", "zoomIn2d", "zoomInGeo", "zoomInMapbox", "zoomOut2d", "zoomOutGeo", "zoomOutMapbox"]}

Plotly.newPlot("mygrahp", data, layout, config, {displaylogo: false}, {responsive: true})
