var ipcRenderer = require('electron').ipcRenderer;
console.log('DOM fully loaded and parsed');
console.log('https://www.typescriptlang.org/docs/handbook/react-&-webpack.html');
var connectBttn = document.getElementById('connect');
var disconnectBttn = document.getElementById('disconnect');
ipcRenderer.on('broker', function (event, args) {
    console.log(event, args);
    var infoEle = document.getElementById('info');
    if (infoEle !== null) {
        var node = document.createElement('div');
        node.innerText = "MQTT broker listening on localhost:" + args.port;
        infoEle.appendChild(node);
    }
});
ipcRenderer.on('published', function (event, args) {
    console.log(event, args);
});
ipcRenderer.on('subscribed', function (event, args) {
    console.log(event, args);
});
ipcRenderer.on('unsubscribed', function (event, args) {
    console.log(event, args);
});
ipcRenderer.on('clientConnected', function (event, args) {
    console.log(event, args);
});
ipcRenderer.on('clientDisconnecting', function (event, args) {
    console.log(event, args);
});
ipcRenderer.on('clientDisconnected', function (event, args) {
    console.log(event, args);
});
if (connectBttn !== null) {
    connectBttn.addEventListener('click', function () {
        ipcRenderer.send('connect');
    });
}
if (disconnectBttn !== null) {
    disconnectBttn.addEventListener('click', function () {
        ipcRenderer.send('disconnect');
    });
}
