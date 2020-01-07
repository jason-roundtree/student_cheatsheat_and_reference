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
                mac: 'Command + P',
                windows: 'Ctrl + P'
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
                mac: 'Shift + Command + Z',
                windows: 'Shift + Ctrl + Z'
            },
        ]
    },
    ////////////
    {
        id: 'vsCode',
        name: 'VS Code Shortcuts & Tools',
        type: 'shortcut_table',
        data: [
            {
                name: 'Comment/Uncomment Code',
                mac: 'Command + ?',
                windows: 'Ctrl + ?'
            },
            {
                name: 'Add Selection to Next Match',
                mac: 'Command/⌘ + D',
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
                windows: 'Ctrl →'
            },
            {
                name: 'Move Cursor to Start of Line',
                mac: 'Command + ←',
                windows: 'Ctrl + ←'
            },
            {
                name: 'Move Cursor to Line',
                mac: 'Ctrl + G',
                windows: 'Ctrl + G'
            },
            {
                name: 'Toggle Word Wrap in Current File',
                mac: 'Option/Alt + G',
                windows: 'Alt + G'
            },
            {
                name: 'Indent/Outdent Line or Selection',
                mac: 'Command + ] / [',
                // TODO: Command may be Ctrl on windows
                windows: 'Command + ] / ['
            },
            {
                name: 'Toggle Terminal',
                mac: 'Control + ~',
                // TODO: does this work for git bash?
                windows: 'Crtl + ~'
            },
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