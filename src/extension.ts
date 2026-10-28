
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const command = vscode.commands.registerCommand(
        'word-counter.countText',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
				return;
			}
            const text = editor.document.getText();
            const words = text.trim() ? text.trim().split(/\s+/).length : 0;
            const lines = editor.document.lineCount;

            vscode.window.showInformationMessage(
                `Words: ${words} | Lines: ${lines}`
            );
        }
    );

    context.subscriptions.push(command);
}

export function deactivate() {}

