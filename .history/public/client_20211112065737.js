

const socket = io();
const client = feathers();

client.configure(feathers.socketio(socket));
