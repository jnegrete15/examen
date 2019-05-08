class Punto{
  constructor(x, y)
  {
  	this.x=x;
  	this.y=y;
  }

  getDistancia(x1,x2,y1,y2){
  	var calculo = (x2-x1)+(y2-y1);
  	return calculo;
  }

}
