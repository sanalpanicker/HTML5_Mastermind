canvas = {
	
		initiate1 : function(){			
						var canvas = $("#canvas")[0].getContext('2d');	//added[0] as this was throwing error	
						canvas.strokeRect(0,0,120,120);
						canvas.fillRect(10,10,100,100);
					},

		initiate2 : function(){			
						var canvas = $("#canvas2")[0].getContext('2d');	//added[0] as this was throwing error	
						canvas.fillStyle="#000099";
						canvas.strokeStyle="#990000";
						canvas.strokeRect(0,0,120,120);
						canvas.fillRect(10,10,100,100);
					},
		initiate3 : function(){	
						var canvas = $("#canvas3")[0].getContext('2d');	//added[0] as this was throwing error	
						var grad = canvas.createLinearGradient(0,0,10,100);
						grad.addColorStop(1,'#00AAFF');
						grad.addColorStop(0.5,'#000000');
						canvas.fillStyle=grad;
						canvas.strokeStyle="#990000";
						canvas.strokeRect(0,0,120,120);
						canvas.fillRect(10,10,100,100);
						canvas.fillRect(150,10,200,100);
					},
		initiate4 : function(){	
						var canvas = $("#canvas4")[0].getContext('2d');	//added[0] as this was throwing error	
						var grad = canvas.createRadialGradient(175,50,10,175,50,25);
						//var grad = canvas.createLinearGradient(0,0,10,100);
						grad.addColorStop(0.2,'#00AAFF');
						grad.addColorStop(0.5,'#000000');
						grad.addColorStop(0.9,'#00AAFF');
						canvas.fillStyle=grad;
						canvas.strokeStyle="#990000";
						//canvas.strokeRect(0,0,120,120);
						//canvas.fillRect(10,10,100,100);
						canvas.fillRect(150,10,200,100);
					},
		initiate5: function(){
						var canvas = $("#canvas5")[0].getContext('2d');	//added[0] as this was throwing error 
						canvas.beginPath();
						canvas.moveTo(100,100);
						canvas.lineTo(200,200);
						canvas.lineTo(100,200);
						canvas.stroke();			
					},
		initiate6: function(){
						var canvas = $("#canvas6")[0].getContext('2d');	//added[0] as this was throwing error 
						canvas.beginPath();
						canvas.moveTo(100,100);
						canvas.lineTo(200,200);
						canvas.lineTo(100,200);
						canvas.closePath();
						canvas.fill();
						canvas.stroke();			
					},
		initiate7: function(){
						var canvas = $("#canvas7")[0].getContext('2d');	//added[0] as this was throwing error 
						canvas.beginPath();
						canvas.moveTo(100,100);
						canvas.lineTo(200,200);
						canvas.lineTo(100,200);
						canvas.clip();
						//canvas.closePath();
						//canvas.fill();
						canvas.beginPath();
						for(var f=0;f<300;f=f+10){
							canvas.moveTo(0,f);
							canvas.lineTo(200,f);
						}
						canvas.stroke();			
					},
		initiate8: function(){
						var canvas = $("#canvas8")[0].getContext('2d');	//added[0] as this was throwing error 
						canvas.beginPath();
						canvas.arc(100,100,50,0,Math.PI*2,false);
						//canvas.beginPath();
						canvas.moveTo(200,150);
						canvas.arc(150,150,50,0,Math.PI*2,false);
						
						
						//canvas.clip();
						
						//canvas.beginPath();
						//for(var f=0;f<300;f=f+10){
							//canvas.moveTo(0,f);
							//canvas.lineTo(200,f);
						//}
						canvas.stroke();			
					},
		initiate9: function(){
						var canvas = $("#canvas9")[0].getContext('2d');	//added[0] as this was throwing error 
						canvas.beginPath();
						var radians =  Math.PI/180*45;
						canvas.arc(100,100,50,0,radians,true);//clockwise if fasle.
						//canvas.beginPath();
						////.moveTo(200,150);
						//canvas.arc(150,150,50,0,Math.PI*2,false);
						
						
						//canvas.clip();
						
						//canvas.beginPath();
						//for(var f=0;f<300;f=f+10){
							//canvas.moveTo(0,f);
							//canvas.lineTo(200,f);
						//}
						canvas.stroke();			
					},
};