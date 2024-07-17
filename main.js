const { app, BrowserWindow, Menu } = require("electron");
const reload = require("electron-reload");

/* Permite que qualquer alteração no código já seja aplicada
   no programa, sem precisar executar novamente */
reload(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

// Menu.setApplicationMenu(null);

function criarJanela() {
  const config = {
    width: 800,
    height: 600,
    // autoHideMenuBar: true /* aperece com a tecla Alt */,
  };

  const janela = new BrowserWindow(config);

  janela.loadFile("index.html");
  janela.setMenuBarVisibility(false);
  // janela.webContents.openDevTools();
}

app.whenReady().then(criarJanela);
