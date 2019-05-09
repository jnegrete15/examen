var puntos = []
var distancia = 0
document.getElementById("calcular").addEventListener('click', () => {
	var x = parseInt(document.getElementById("x").value);
	var y = parseInt(document.getElementById("y").value);
	var punto = new Punto(x,y);
	puntos.push(punto);
	if (puntos.length<2){ 
		document.getElementById('res').innerHTML = 0;
	}
	else{
		punto1 = puntos[puntos.length-1]
		punto2 = puntos[puntos.length-2]
		distancia += punto1.getDistancia(punto1.x,punto1.y,punto2);
		document.getElementById('res').innerHTML = distancia;
	}
})