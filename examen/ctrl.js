document.getElementById("calcular").addEventListener('click', () => {
	pasada = 0;

	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;

	const punto = new Punto(x,y);
	var distancia= 0;
	var dis = punto.getDistancia(punto.x,punto.y);
	distancia += pasada + dis;
	pasada = distancia
	document.getElementById('res').innerHTML = dis;

})