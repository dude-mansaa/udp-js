load('api_pwm.js');

let red = 4;
let green = 15;
let blue = 5;
let white = 19;
GPIO.set_mode(red,GPIO.MODE_OUTPUT);
GPIO.set_mode(green,GPIO.MODE_OUTPUT);
GPIO.set_mode(blue,GPIO.MODE_OUTPUT);
GPIO.set_mode(white,GPIO.MODE_OUTPUT);

let color = function(args){
	let r,g,b,w=0;
	let model = args.p;
	r = args.r;
	g = args.g;
	b = args.b;
	w = args.w;
	let DR,DG,DB,DW=0;
	if(model === 'rgb'){
		if(r > 0 && g > 0 && b > 0){
			let avg = (r+g+b)/3
			DR = 0;
			DG = 0;
			DB = 0;
			DW = avg*255/100;
			PWM.set(red,1000,DR);
			PWM.set(green,1000,DG);
			PWM.set(blue,1000,DB);
			PWM.set(white,1000,DW);
			return 'success'
		}else{
			DR = r*255/100;
			DG = g*255/100;
			DB = b*255/100;
			DW = w*127/100;
			PWM.set(red,1000,DR);
			PWM.set(green,1000,DG);
			PWM.set(blue,1000,DB);
			PWM.set(white,1000,DW);
			return 'success'
		}
	}else if(model === 'ct'){
		if(r > 0 && g > 0 && b > 0){
			let avg = (r+g+b)/3
			DR = 0;
			DG = 0;
			DB = 0;
			DW = avg*255/100;
			PWM.set(red,1000,DR);
			PWM.set(green,1000,DG);
			PWM.set(blue,1000,DB);
			PWM.set(white,1000,DW);
			return 'success'
		}else{
			DR = r*127/100;
			DG = g*127/100;
			DB = b*127/100;
			DW = w*255/100;
			PWM.set(red,1000,DR);
			PWM.set(green,1000,DG);
			PWM.set(blue,1000,DB);
			PWM.set(white,1000,DW);
			return 'success'
		}
	}
	return 'failure';
};
