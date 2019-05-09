class Punto{
  constructor(x, y)
  {
  	this.x=x;
  	this.y=y;
  }

  getDistancia(x1,y1,actual){
  	var x2 = actual.x;
  	var y2 = actual.y;
  	var calculo = Math.pow((Math.pow((x2-x1),2)+Math.pow((y2-y1),2)),1/2);
  	return calculo;
  }
}

