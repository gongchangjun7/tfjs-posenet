var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
// function testUpdate(){
//   ctx.clearRect(0, 0, window.canvas.width, window.canvas.height)
// }

//app.js
App({
  onLaunch: function () {
    plugin.configPlugin({
      fetchFunc: fetchWechat.fetchFunc(),
      tf,
      canvas: wx.createOffscreenCanvas()
    });
  }
});