setup=_=>{
  createCanvas(W=1920,1080)
  H=W/2
	D=H/20
	C=0
  P=[]
  stroke(W)
}
draw=_=>{
  background(0,50)
	P.length<W&&P.push({x:H,y:H})
	C+=.01
  i=0
  for(_ of P)with(_){
    mag(x-H,y-H)<33&&(x=random(W),y=0)
		n=noise(x/W-C,y/W-i++*.01)*PI*5
    line(x,y,
				 x+=cos(n)*9-(x-H)/D,
				 y+=sin(n)*9-(y-H)/D
				)
  }
}