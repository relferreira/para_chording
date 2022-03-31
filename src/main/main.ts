/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
const { keyboard } = require('@nut-tree/nut-js');
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import Store from 'electron-store';
import iohook from 'iohook';
import { Key } from '@nut-tree/nut-js';
import { keyNames } from './keys';

const store = new Store();
const CHORDS_DB = 'chords-db';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

ipcMain.on('electron-store-get', async (event) => {
  event.returnValue = store.has(CHORDS_DB)
    ? JSON.parse(store.get(CHORDS_DB) as string)
    : [];
});
ipcMain.on('electron-store-set', async (event, key, val) => {
  let storedValues = store.has(CHORDS_DB)
    ? JSON.parse(store.get(CHORDS_DB) as string)
    : [];
  storedValues = storedValues.concat([{ shortcut: key, value: val }]);
  store.set(CHORDS_DB, JSON.stringify(storedValues));
  registerShortcuts();
});

ipcMain.on('electron-store-remove', async (event, key) => {
  let storedValues = store.has(CHORDS_DB)
    ? JSON.parse(store.get(CHORDS_DB) as string)
    : [];
  storedValues = storedValues.filter((v: any) => v.shortcut !== key);
  store.set(CHORDS_DB, JSON.stringify(storedValues));
  registerShortcuts();
});

ipcMain.on('electron-store-clear', async () => {
  store.clear();
  registerShortcuts();
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

function registerShortcuts() {
  let chords = store.has(CHORDS_DB)
    ? JSON.parse(store.get(CHORDS_DB) as string)
    : [];
  iohook.removeAllListeners();
  iohook.unregisterAllShortcuts();
  keyboard.config = { autoDelayMs: 0 };

  let buffer: string[] = [];
  let lastKeyTime = Date.now();
  let state: any = {};
  iohook.on('keydown', async (key) => {
    state[key.keycode] = true;

    const currentTime = Date.now();

    if (currentTime - lastKeyTime > 40) {
      buffer = [];
    }

    buffer.push(key.keycode);
    let bufferJoin = buffer.sort().join('');
    lastKeyTime = currentTime;
    let shortcutFound = chords.find(
      (chord: any) =>
        bufferJoin ===
        chord.shortcut
          .split('+')
          .map((k: string) => keyNames[k])
          .sort()
          .join('')
    );

    if (shortcutFound) {
      console.log('Shortcut called with keys:', shortcutFound);
      for (let _ of shortcutFound.shortcut.split('+'))
        await keyboard.pressKey(Key.Backspace);
      await keyboard.type(shortcutFound.value);
    }
  });
}

app
  .whenReady()
  .then(() => {
    createWindow();
    iohook.start(false);
    registerShortcuts();

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });

    app.on('before-quit', () => {
      iohook.unload();
      iohook.stop();
    });
  })
  .catch(console.log);
