'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');

// Use `npm run electron:dev` (sets NODE_ENV=development).
const isDev = process.env.NODE_ENV === 'development';

function resolveIndexHtml() {
	return path.join(__dirname, '..', 'build', 'index.html');
}

function createWindow() {
	const win = new BrowserWindow({
		width: 1280,
		height: 800,
		show: false,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			sandbox: true,
		},
	});

	win.once('ready-to-show', () => win.show());
	win.on('closed', () => {});

	if (isDev) {
		const devUrl = 'http://127.0.0.1:5173';
		win.loadURL(devUrl);
		win.webContents.openDevTools({ mode: 'detach' });
	} else {
		win.loadFile(resolveIndexHtml());
	}
}

app.whenReady().then(() => {
	createWindow();
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
