const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

// Code Start : encrypt decrypt
	const Cryptr = require('cryptr');
	const cryptr = new Cryptr('myTotalySecretKey');
 
	const encryptedString = cryptr.encrypt('4567');
	const decryptedString = cryptr.decrypt(encryptedString);
	
	console.log("encrypt ---------  ", encryptedString);
	console.log("decrypt ---------  ", decryptedString); // bacon
// Code END : encrypt decrypt
 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))