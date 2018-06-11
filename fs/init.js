
load('api_net.js');


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



