const { ipcRenderer } = require('electron');

console.log('DOM fully loaded and parsed');
console.log('https://www.typescriptlang.org/docs/handbook/react-&-webpack.html');

const connectBttn = document.getElementById('connect');
const disconnectBttn = document.getElementById('disconnect');

ipcRenderer.on('broker', (event: any, args: any) => {
  console.log(event, args);
  const infoEle = document.getElementById('info');
  if (infoEle !== null) {
    const node = document.createElement('div');
    node.innerText = `MQTT broker listening on localhost:${args.port}`;
    infoEle.appendChild(node);
  }
});

ipcRenderer.on('published', (event: any, args: any) => {
  console.log(event, args);
});
ipcRenderer.on('subscribed', (event: any, args: any) => {
  console.log(event, args);
});
ipcRenderer.on('unsubscribed', (event: any, args: any) => {
  console.log(event, args);
});
ipcRenderer.on('clientConnected', (event: any, args: any) => {
  console.log(event, args);
});
ipcRenderer.on('clientDisconnecting', (event: any, args: any) => {
  console.log(event, args);
});
ipcRenderer.on('clientDisconnected', (event: any, args: any) => {
  console.log(event, args);
});

if (connectBttn !== null) {
  connectBttn.addEventListener('click', () => {
    ipcRenderer.send('connect');
  });
}
if (disconnectBttn !== null) {
  disconnectBttn.addEventListener('click', () => {
    ipcRenderer.send('disconnect');
  });
}

