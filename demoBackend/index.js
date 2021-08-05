const express = require('express');
const cors = require('cors');
const io = require("socket.io")(8081, {
	cors: {
		origin: '*',
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
	}
});
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
	try {
		res.send({
			text: 'funciona!'
		});
	} catch (error) {
		res.send({error});
	}
});

io.on("connection", socket => {
	const {id} = socket.handshake.query;
	console.log({id})
	if(id){
		socket.join(id);
	}

	socket.on('latitude-longitude', geoReference => {
		const { roomId } = geoReference;
		console.log({geoReference});
		socket.to(roomId).emit("latitude-longitude", geoReference)
	})


})

app.listen(8080, () => {
	console.log("server is running on port 8080")
});