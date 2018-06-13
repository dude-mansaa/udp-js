
load('api_net.js');
load('api_http.js');


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

let listener = HTTP.get_system_server();
HTTP.add_endpoint(listener, '/foo', function(conn, ev, msg) {
  Net.send(conn, 'HTTP/1.0 200 OK\r\n\r\n');
  Net.send(conn, HTTP.param(msg, HTTP.MESSAGE));
  Net.close(conn);
}, true);


