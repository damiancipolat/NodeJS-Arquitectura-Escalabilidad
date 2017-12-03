const request = require('./balancedRequest');

for(var i = 10; i >= 0; i--){

	let str = '';

	request({method: 'GET', path: '/'},(res)=>{
		
		res.on('data', (chunk)=>{
			str += chunk;
		}).on('end', ()=>{
			console.log(str);
		});		
		
	}).end();
	
}