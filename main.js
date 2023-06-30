const {app,BrowserWindow}=require('electron');

let mainWindow;


function createWindow(){
    mainWindow=new BrowserWindow({
        width:1000, height:800
    });
    mainWindow.loadFile('./index.html');
    mainWindow.on('closed',function(){
        app.quit();
    })
}
app.on('ready',createWindow);