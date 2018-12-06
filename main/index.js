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
const electron_1 = require("electron");
const broker_1 = __importDefault(require("./broker"));
let win = null;
const path = __importStar(require("path"));
const url = __importStar(require("url"));
// tslint:disable-next-line:no-var-requires
// require('electron-reload')(path.join(app.getAppPath(), 'interface'));
const createWindow = () => {
    win = new electron_1.BrowserWindow({
        darkTheme: true,
    });
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(electron_1.app.getAppPath(), 'interface', 'index.html'),
        protocol: 'file:',
        slashes: true,
    });
    win.loadURL(startUrl);
    electron_1.BrowserWindow.addDevToolsExtension(path.join(electron_1.app.getAppPath(), 'dev-tools', 'react'));
    win.webContents.openDevTools();
    const mqttServer = broker_1.default();
    // console.log(mqttServer.opts);
    // Emitted when the window is closed.
    win.webContents.on('did-finish-load', () => {
        if (win !== null) {
            win.webContents.send('broker', mqttServer.opts);
            win.webContents.send('ping', 'whoooooooh!');
            mqttServer.on('subscribed', (topic, client) => {
                if (client !== undefined && win !== null) {
                    const msg = `Client ${client.id} subscribed to ${topic}`;
                    win.webContents.send('subscribed', msg);
                }
            });
            mqttServer.on('unsubscribed', (topic, client) => {
                if (client !== undefined && win !== null) {
                    const msg = `Client $(client.id} unsubscribed from ${topic}`;
                    win.webContents.send('unsubscribed', msg);
                }
            });
            mqttServer.on('clientConnected', (client) => {
                if (client !== undefined && win !== null) {
                    const msg = `client ${client.id} connected`;
                    win.webContents.send('clientConnected', msg);
                }
            });
            mqttServer.on('clientDisconnecting', (client) => {
                if (client !== undefined && win !== null) {
                    const msg = `Client ${client.id} is disconnecting`;
                    win.webContents.send('clientDisconnecting', msg);
                }
            });
            mqttServer.on('clientDisconnected', (client) => {
                if (client !== undefined && win !== null) {
                    const msg = `Client ${client.id} has disconnected. Bye bye.`;
                    win.webContents.send('clientDisconnected', msg);
                }
            });
            mqttServer.on('published', (packet, client) => {
                if (client !== undefined && win !== null) {
                    const msg = `Client ${client.id}
published a message on topic
${packet.topic} ${packet.payload.toString('utf8')}`;
                    win.webContents.send('published', msg);
                }
            });
        }
    });
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
        electron_1.app.quit();
    });
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
electron_1.ipcMain.on('connect', (event, arg) => {
    // tslint:disable-next-line:no-console
    console.log(`connect, event ${event} arg: ${arg}`);
});
electron_1.ipcMain.on('disconnect', (event, arg) => {
    // tslint:disable-next-line:no-console
    console.log(`dsconnect, event ${event} arg: ${arg}`);
});
