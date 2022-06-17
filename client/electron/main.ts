import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const isLocal = process.env.REACT_APP_IS_LOCAL;

let win: BrowserWindow | null = null;
function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  if (isLocal) {
    win.loadURL('http://localhost:3000/index.html');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit',
    });
  } else {
    win.loadURL(`file://${__dirname}/../index.html`);
    win.webContents.on('devtools-opened', () => {
      win?.webContents.closeDevTools();
    });
  }
  win.on('closed', () => (win = null));
}

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
