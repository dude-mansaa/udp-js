load('api_net.js');
load('api_rpc.js');
load('api_pwm.js');
load('api_gpio.js');
load('color.js');

Net.serve({
  addr: 'udp://1234',
  ondata: function(conn, data) {
    let hport = Net.ctos(conn, false, true, true);
	if(data === 'Are You A Mansaa Device?'){
		print('Received from:', hport, ':', data);
		Net.send(conn,'Mansaa Light');            // Echo received data back
	}
    Net.discard(conn, data.length);  // Discard received data
  },
});

let red = 4;
let green = 15;
let blue = 5;
let white = 19;
GPIO.set_mode(red,GPIO.MODE_OUTPUT);
GPIO.set_mode(green,GPIO.MODE_OUTPUT);
GPIO.set_mode(blue,GPIO.MODE_OUTPUT);
GPIO.set_mode(white,GPIO.MODE_OUTPUT);

RPC.addHandler('color',function(args){
	return color(args);
});
//PWM.set(red,1000,0.10);
