import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';

let win: BrowserWindow | null = null;
const createWindow = () => {
  win = new BrowserWindow({
    fullscreen: false,
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  if (isDev) {
    win.loadURL('http://localhost:3000/index.html');
  } else {
    win.loadURL('http://localhost:3000/index.html');
    //win.loadURL(`file://${__dirname}/../index.html`);
    // win.webContents.on('devtools-opened', () => {
    //   win?.webContents.closeDevTools();
    // });
  }
  win.on('closed', () => (win = null));
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
