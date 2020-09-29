function convPrecio(value) {
resultado="$"+Math.floor(value)+".";
var cent=100*(value-Math.floor(value))+0.5;
resultado += Math.floor(cent/10);
resultado += Math.floor(cent%10);
return resultado;
}

function calcular() {
var valorImp = (document.forms[0].precio.value)*(document.forms[0].impuesto.value);
document.forms[0].valorImp.value=valorImp;
var cost3= eval( document.forms[0].precio.value );
cost3 += eval( (document.forms[0].precio.value)*(document.forms[0].impuesto.value) );
var costoTotal = convPrecio(cost3);
document.forms[0].costoTotal.value=costoTotal;
}

function limpiar() {
document.forms[0].precio.value="";
document.forms[0].impuesto.value=".65";
document.forms[0].valorImp.value="";
document.forms[0].costoTotal.value="";
}
