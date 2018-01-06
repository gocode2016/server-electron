/**
 * 窗体定义配置
 */
let winCfg = {};
import {nativeImage } from 'electron'
const path = require('path')
const iconPath = path.join(__dirname + '/logo.png')
var image = nativeImage.createFromPath(iconPath);
winCfg = {
    loginOptions:{
        width: 460,
        height: 380,
        frame: false,
        minWidth: 460,
        // alwaysOnTop: true,
        resizable: false,
        transparent: true,
        icon: image,
        dev:false
    },
    indexOptions:{
        width: 900,
        height: 680,
        minWidth: 660,
        frame: false,
        minHeight:660,
        resizable: true,
        transparent: true,
        icon: image,
        dev:false
    }
}

export default winCfg;