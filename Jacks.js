var ctx;
function canvasStart(idOfCanvas, dimensions) {
  var canvas = document.getElementById(arguments[0]);
  ctx = canvas.getContext(arguments[1]);
  return "ctx has been created. Use this for your canvas!";
}
var canvas = {
    fontSizing: var fontSizing = "12px";
    font: var font = "Times New Roman";
	rectangle: function rectangle(left, top, width, height) {
		ctx.fillRect(arguments[0], arguments[1], arguments[2], arguments[3]);
	},
    fillColor: function fillColor(hexcolor) {
      ctx.fillStyle=arguments[0];
    }, 
    strokeColor: function strokeColor(hexcolor) {
      ctx.strokeStyle=arguments[0];
    }
    text: function text(text, left, top) {
      ctx.fillText(arguments[0], arguments[1], arguments[2]);
    }
}
