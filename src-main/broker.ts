import chalk from 'chalk';
import * as mosca from 'mosca';

const settings = {
  json: false,
  mqtt: require('mqtt'),
  port: 1883,
  type: 'mqtt',
  // @ts-ignore
  // host: '127.0.0.1',
};

export default function broker() {


const server = new mosca.Server(settings);

server.on('clientConnected', (client: any) => {
  if (client !== undefined) {
    // @ts-ignore
    console.log(`client ${chalk.green(client.id)} connected`);
  }
  // console.log('client -->', client);
});

server.on('clientDisconnecting', (client: any) => {
  if (client !== undefined) {
    // @ts-ignore
    console.log(`Client ${chalk.red(client.id)} is disconnecting`);
  }
});

server.on('clientDisconnected', (client: any) => {
  if (client !== undefined) {
    // @ts-ignore
    console.log(`Client ${chalk.red(client.id)} has disconnected. Bye bye.`);
  }
});

// fired when a message is received
server.on('published', (packet, client) => {
  if (client !== undefined) {
    // @ts-ignore
    console.log(`Client ${chalk.green(client.id)} published a message
      on topic ${chalk.
    blue(packet.topic)}
      content ${chalk.
    blue(packet.payload.toString('utf8'))}`);
  }
// console.log(packet);
// console.log('Received %s from %s', packet.payload, client.id);
// console.log('Published', packet.payload);
});

server.on('unsubscribed', (topic, client) => {
  if (client !== undefined) {
    console.log(`Client ${chalk.red(client.id)} unsubscribed from ${chalk.blue(topic as unknown as string)}`);
  }
// console.log(packet);
// console.log('Received %s from %s', packet.payload, chalk.red(client.id));
// console.log('Published', packet.payload);
});

server.on('subscribed', (topic, client) => {
  if (client !== undefined) {
    console.log(`Client ${chalk.green(client.id)} subscribed to ${chalk.blue(topic as unknown as string)}`);
  }
// console.log(packet);
// console.log('Received %s from %s', packet.payload, client.id);
// console.log('Published', packet.payload);
});

// fired when the mqtt server is ready
server.on('ready', () => {
  console.log(chalk.bold.black.bgGreen('Mosca broker is up and running'));
});

return server;
}
