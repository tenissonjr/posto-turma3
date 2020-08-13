window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.MeuLocal = window.blockly.js.blockly.MeuLocal || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.MeuLocal.desenharMapa = function() {
 var item, meulocal;
  meulocal = this.cronapi.maps.createLatLngPoint(this.cronapi.screen.getValueOfField("vars.vLatitude"), this.cronapi.screen.getValueOfField("vars.vLongitude"));
  this.cronapi.maps.init("mapLocal", 'roadmap', meulocal, '16', function(sender_item) {
      item = sender_item;
    this.cronapi.maps.createMarker("mapLocal", 'meulocal', 'Você está aqui !!! ', meulocal, '', 'Você está aqui mesmo !!! ', '');
  }.bind(this));
}

/**
 * MeuLocal
 */
window.blockly.js.blockly.MeuLocal.obterCoordenadas = function() {
 var item, meulocal;
  this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_meulocal) {
      meulocal = sender_meulocal;
    this.cronapi.screen.changeValueOfField("vars.vLatitude", this.cronapi.object.getProperty(meulocal, 'coords.latitude'));
    this.cronapi.screen.changeValueOfField("vars.vLongitude", this.cronapi.object.getProperty(meulocal, 'coords.longitude'));
  }.bind(this), function(sender_meulocal) {
      meulocal = sender_meulocal;
    this.cronapi.screen.notify('error','Não foi possível obter as coordenadas !! ');
  }.bind(this));
}
