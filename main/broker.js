"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const mosca = __importStar(require("mosca"));
const settings = {
    json: false,
    mqtt: require('mqtt'),
    port: 1883,
    type: 'mqtt',
};
function broker() {
    const server = new mosca.Server(settings);
    server.on('clientConnected', (client) => {
        if (client !== undefined) {
            // @ts-ignore
            console.log(`client ${chalk_1.default.green(client.id)} connected`);
        }
        // console.log('client -->', client);
    });
    server.on('clientDisconnecting', (client) => {
        if (client !== undefined) {
            // @ts-ignore
            console.log(`Client ${chalk_1.default.red(client.id)} is disconnecting`);
        }
    });
    server.on('clientDisconnected', (client) => {
        if (client !== undefined) {
            // @ts-ignore
            console.log(`Client ${chalk_1.default.red(client.id)} has disconnected. Bye bye.`);
        }
    });
    // fired when a message is received
    server.on('published', (packet, client) => {
        if (client !== undefined) {
            // @ts-ignore
            console.log(`Client ${chalk_1.default.green(client.id)} published a message
      on topic ${chalk_1.default.
                blue(packet.topic)}
      content ${chalk_1.default.
                blue(packet.payload.toString('utf8'))}`);
        }
        // console.log(packet);
        // console.log('Received %s from %s', packet.payload, client.id);
        // console.log('Published', packet.payload);
    });
    server.on('unsubscribed', (topic, client) => {
        if (client !== undefined) {
            console.log(`Client ${chalk_1.default.red(client.id)} unsubscribed from ${chalk_1.default.blue(topic)}`);
        }
        // console.log(packet);
        // console.log('Received %s from %s', packet.payload, chalk.red(client.id));
        // console.log('Published', packet.payload);
    });
    server.on('subscribed', (topic, client) => {
        if (client !== undefined) {
            console.log(`Client ${chalk_1.default.green(client.id)} subscribed to ${chalk_1.default.blue(topic)}`);
        }
        // console.log(packet);
        // console.log('Received %s from %s', packet.payload, client.id);
        // console.log('Published', packet.payload);
    });
    // fired when the mqtt server is ready
    server.on('ready', () => {
        console.log(chalk_1.default.bold.black.bgGreen('Mosca broker is up and running'));
    });
    return server;
}
exports.default = broker;
