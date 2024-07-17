const { app, BrowserWindow, Menu } = require("electron");
const reload = require("electron-reload");

/* Permite que qualquer alteração no código já seja aplicada
   no programa, sem precisar executar novamente 
   OBS: RETIRAR ESSAS LINHAS DO RELOAD NO BUILD */
// reload(__dirname, {
//   electron: require(`${__dirname}/node_modules/electron`),
// });

// Menu.setApplicationMenu(null);

function criarJanela() {
  const config = {
    // width: 800,
    // height: 600,
    // autoHideMenuBar: true /* aperece com a tecla Alt */,
  };

  const janela = new BrowserWindow(config);

  janela.loadFile("index.html");
  // janela.loadURL("https://www.youtube.com.br");
  // janela.setIcon("image.png");
  janela.setMenuBarVisibility(false);
  janela.setTitle("Teste"); /* Apenas se nao tiver o html carregado */
  // janela.maximize(); /* Para a app abrir em tela cheia */
  // janela.webContents.openDevTools();
  // janela.simpleFullScreen = true;
}

app.whenReady().then(criarJanela);
