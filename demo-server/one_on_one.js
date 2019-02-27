const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let messageList = []
let userMap = new Map();
const lobby = 'lobby';

function getOtherUser(id) {
	const keys = Array.from(userMap.keys());
	const filtered = keys.filter((value) => {
		if (value.indexOf(id) === -1) {
			return value;
		}
	});
	return userMap.get(filtered[0]);
}

io.on('connection', function (socket) {
	socket.on('disconnect', function () {
		userMap.delete(socket.id);
	});
	userMap.set(socket.id, "");
	console.log('User Connected: -> ' + socket.id);
	socket.emit('connected', 'Welcome');

	socket.on('init', function (data) {
		socket.join(data.id);
		userMap.set(socket.id, data.id);
	});

	socket.on('call', function (data) {
		console.log('call from', data.from);
		const otherId = getOtherUser(socket.id);
		io.in(otherId).emit('call:incoming', {
			from: data.from,
			to: otherId,
			sdp: data.sdp
		});
	});

	socket.on('iceCandidate', function (data) {
		console.log('call:iceCandidate', data.from);
		const otherId = getOtherUser(socket.id);
		io.in(otherId).emit('call:iceCandidate', Object.assign({}, data, {
			to: otherId
		}));
	});

	socket.on('answer', function (data) {
		console.log('call:answer', data.from);
		const otherId = getOtherUser(socket.id);
		io.in(otherId).emit('call:answer', {
			from: data.from,
			sdp: data.sdp,
			to: otherId
		});
	});

	socket.on('answered', function (data) {
		console.log('call:answered', data.from);
		const otherId = getOtherUser(socket.id);
		io.in(otherId).emit('call:answered', {
			from: data.from,
			sdp: data.sdp,
			to: otherId
		});
	})

});

server.listen(3001);
