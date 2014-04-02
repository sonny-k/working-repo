/// <reference path="./ThirdParty/jquery.d.ts" />

module canvasCommon{
	export class canvasCommonClass{
		constructor(){
			console.log("Created Canvas Common Class");
		}
		
		startAnimation(type:number, canvasName:string){
			switch(type){
				case 0:
				this.rotateLine(canvasName, null,null,null,null,null,null);
			}
		}

		rotateLine(canvasName:string, startPointX:number, startPointY:number, axisPointX:number, axisPointY:number, endPointX:number, endPointY:number){
			var c:any = document.getElementById(canvasName);
			var ctx:any = c.getContext("2d");

			if(startPointX === null){
				startPointX = 10;
			}
			if(startPointY === null){
				startPointY = 10;
			}

			if(endPointX === null){
				endPointX = 30;
			}
			if(endPointY === null){
				endPointY = 30;
			}
			if(axisPointX === null){
				axisPointX = startPointX;
			}
			if(axisPointY === null){
				axisPointY = startPointY;
			}

			ctx.beginPath();
			ctx.moveTo(startPointX,startPointY);
			ctx.lineTo(endPointX, endPointY);
			ctx.stroke();

			 ctx.clearRect(0, 0, c.width, c.height);

			ctx.beginPath();
			ctx.moveTo(50,50);
			ctx.lineTo(90, 90);
			ctx.stroke();


		}
	}
}