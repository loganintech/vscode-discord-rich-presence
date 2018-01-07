'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DRPUtils } from "./util";
import { setInterval } from 'timers';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const discordRichPresenceModule = require("discord-rich-presence");
let discordPresence = null;
let timeStarted = Date.now();
let intervalLoop: NodeJS.Timer;
let invisible = false;
const config = vscode.workspace.getConfiguration("drp");

export function activate(context: vscode.ExtensionContext) {

    invisible = config.get("invisible");

    if (!discordPresence) discordPresence = discordRichPresenceModule("399330996413267968");
    
    if(!intervalLoop) intervalLoop = setInterval(setPresence, 1000 * 10);
    setPresence();
}

// this method is called when your extension is deactivated
export function deactivate() {
    discordPresence.updatePresence({})
    clearInterval(intervalLoop);
    intervalLoop = null;
}

function setPresence() {

    invisible = config.get("invisible");
    if ( invisible ) return;

    const imageKey = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document.languageId : "nothing";
    const language = DRPUtils.languageFromIdentifier(imageKey);

    discordPresence.updatePresence({
        details: `Writing ${language}`,
        startTimestamp: timeStarted,
        largeImageKey: imageKey,
        instance: true
    });
}