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
  let r,g,b=0;
	let model = args.p;
	let i = floor(args.h/60);
	let F = args.h-i;
	let P = args.v * (1-args.s);
	let Q = args.v * (1 -F * args.s);
	let T = args.v * (1 - args.s * (1-F));
	if(hi === 0){
		r = args.v;
	    	g = T;
	    	b = P;
	}else if(hi === 1){
		r = Q;
	    	g = args.v;
	    	b = P;
	}else if(hi === 2){
		r = P;
	    	g = args.v;
	    	b = T;
	}else if(hi === 3){
		r = P;
	   	g = Q;
	   	b = args.v;
	}else if(hi === 4){
		r = T;
	    	g = P;
	    	b = args.v;
	}else if(hi === 5){
		r = args.v;
	    	g = P;
	    	b = Q;
	}	
	let DR = r*255/100;
	let DG = g*255/100;
	let DB = b*255/100;
	let DW = args.s;
	if(model === 'rgb'){
	  PWM.set(red,1000,DR);
	  PWM.set(green,1000,DG);
	  PWM.set(blue,1000,DB);
	  PWM.set(white,1000,DW*50/100);
	}else if(model === 'ct'){
	  PWM.set(red,1000,DR*50/100);
	  PWM.set(green,1000,DG*50/100);
	  PWM.set(blue,1000,DB*50/100);
	  PWM.set(white,1000,DW);
	}
	return 'success'
};
