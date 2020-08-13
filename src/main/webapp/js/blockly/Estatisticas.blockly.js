window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Estatisticas = window.blockly.js.blockly.Estatisticas || {};

/**
 * Estatisticas
 */
window.blockly.js.blockly.Estatisticas.popular_grafico = function() {
 var item, dados, legenda, linha, lista, serie1, serie2;
  dados = this.cronapi.screen.getValueOfField('Estatisticas.data');
  legenda = [];
  serie1 = [];
  serie2 = [];
  for (var linha_index in dados) {
    linha = dados[linha_index];
    legenda.push(this.cronapi.object.getObjectField(linha, 'posto_posto'));
    serie1.push(this.cronapi.object.getObjectField(linha, 'valor'));
    serie2.push(this.cronapi.object.getObjectField(linha, 'valor_1'));
  }
  this.cronapi.chart.createChart("chart-dados-cliente", 'bar', legenda, null, [this.cronapi.chart.createDataset('Ticket Médio', serie1, null), this.cronapi.chart.createDataset('Valor total (soma)', serie2, null)]);
}
