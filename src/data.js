const data = [
    {
        id: 'general_shortcuts',
        name: 'General Shortcuts',
        type: 'shortcut_table',
        data: [
            {
                name: 'Copy',
                mac: 'Command + C',
                windows: 'Ctrl + C'
            },
            {
                name: 'Paste',
                mac: 'Command + V',
                windows: 'Ctrl + V'
            },
            {
                name: 'Cut',
                mac: 'Command + X',
                windows: 'Ctrl + X'
            },
            {
                name: 'Undo',
                mac: 'Command + U',
                windows: 'Ctrl + U'
            },
            {
                name: 'Redo',
                mac: 'Command + Shift + Z',
                windows: 'Ctrl + Shift + Z'
            },
            {
                name: 'Select All',
                mac: 'Command + A',
                windows: 'Ctrl + A'
            },
            {
                name: 'Save File',
                mac: 'Command + S',
                windows: 'Ctrl + S'
            },
            {
                name: 'New File',
                mac: 'Command + N',
                windows: 'Ctrl + N'
            },
            {
                name: 'Open File',
                mac: 'Command + O',
                windows: 'Ctrl + O'
            },
        ]
    },
    ////////////
    {
        id: 'vsCode_shortcuts',
        name: 'VS Code Shortcuts',
        type: 'shortcut_table',
        data: [
            // TODO: Emmet cheatsheet link: https://docs.emmet.io/cheat-sheet/
            {
                name: 'Toggle Code Comment',
                mac: 'Command + ?',
                windows: 'Ctrl + ?'
            },
            {
                name: 'Cut Line',
                mac: 'Command + X',
                windows: 'Ctrl + X',
                notes: [
                    'This can effectively be used to quickly delete lines.'
                ]
            },
            {
                name: 'Delete Line',
                mac: 'Command + Shift + K',
                windows: 'Ctrl + Shift + K',
            },
            {
                name: 'Add Selection to Next Match',
                mac: 'Command + D',
                windows: 'Ctrl + D'
            },
            {
                name: 'Move Line Up/Down',
                mac: 'Option/Alt + ↑/↓',
                windows: 'Alt + ↑/↓'
            },
            {
                name: 'Move Cursor to End of Line',
                mac: 'Command + →',
                windows: 'Windows + →'
            },
            {
                name: 'Move Cursor to Start of Line',
                mac: 'Command + ←',
                windows: 'Windows + ←'
            },
            {
                name: 'Move Cursor to Line',
                mac: 'Ctrl + G',
                windows: 'Ctrl + G'
            },
            {
                name: 'Insert Line Below',
                mac: 'Command + Enter',
                windows: 'Ctrl + Enter'
            },
            {
                name: 'Insert Line Above',
                mac: 'Command + Shift + Enter',
                windows: ' Ctrl + Shift + Enter'
            },
            {
                name: 'Toggle Word Wrap in Current File',
                mac: 'Option/Alt + G',
                windows: 'Alt + G'
            },
            {
                name: 'Jump to Matching Bracket',
                mac: 'Command + Shift + \\',
                windows: 'Ctrl + Shift + \\'
            },
            {
                name: 'Indent/Outdent Line or Selection',
                mac: 'Command + ] / [',
                // TODO: Command may be Ctrl on windows
                windows: 'Ctrl + ] / [',
                notes: [
                    'The cursor can be anywhere on the line, for instance, in between words, and it will still only move the whole line.'
                ]
            },
            {
                name: 'Expand/Shrink Current Selection',
                mac: 'Control + Shift + Command + ←/→',
                windows: '?????'
            },
            {
                name: 'Toggle Terminal',
                mac: 'Control + ~',
                // TODO: does this work for git bash?
                windows: 'Crtl + ~'
            },
            {
                name: 'Open VSCode Command Palette',
                mac: 'Shift + Command + P',
                // TODO: does this work for git bash?
                windows: 'Shift + Crtl + P'
            },
        ]
    },
    ////////////
    {
        id: 'vsCode_tools',
        name: 'VS Code Tools & Extentions',
        data: [
            {

            }
        ]
    },
    ////////////
    {
        id: 'browser_shortcuts',
        name: 'Browser Shortcuts',
        type: 'shortcut_table',
        data: [

        ]
    },
    {
        id: 'types',
        name: 'Types',
        type: 'shortcut_table',
        data: [

        ]
    },
    {
        id: 'operators',
        name: 'Operators',
        type: '',
        data: [

        ]
    },
    {
        id: 'variables',
        name: 'Variables',
        type: '',
        data: [

        ]
    },
    {
        id: 'functions',
        name: 'Functions ',
        type: '',
        data: [

        ]
    },
    {
        id: 'loops',
        name: 'Loops',
        type: '',
        data: [

        ]
    },
    {
        id: 'control_statements',
        name: 'Control Statements ',
        type: '',
        data: [

        ]
    },
    {
        id: 'scopes',
        name: 'Scope & Closures',
        type: '',
        data: [

        ]
    },
]

export default data