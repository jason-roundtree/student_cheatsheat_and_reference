const data = [
    {
        id: 'basic_shortcuts',
        name: 'Basic Shortcuts',
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
                name: 'Save',
                mac: 'Command + S',
                windows: 'Ctrl + S'
            },
            {
                name: 'Save As',
                mac: 'Shift + Command + S',
                windows: 'Shift + Ctrl + S'
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
            {
                name: 'Close File',
                mac: 'Command + W',
                windows: 'Ctrl + W'
            },
            {
                name: 'Find',
                mac: 'Command + F',
                windows: 'Ctrl + F'
            },
            {
                name: 'Zoom In/Out',
                mac: 'Command + +/-',
                windows: 'Ctrl + +/-',
                notes: [
                    'Usually you can reset the zoom level to 100% with Command/Ctrl + 0.'
                ]
            },
            {
                name: 'Switch Between Open Applications',
                mac: 'Command + Tab',
                windows: 'Alt + Tab',
                notes: [
                    'The default behavoir for this shortcut is for open applications to be traversed from left to right in order of most recently used applications but you can also press the Shift key to rotate from right to left. Also, by just pressing Alt + Tab you can toggle between the current and last used application.'
                ]
            },
            // {
            //     name: '',
            //     mac: '',
            //     windows: ''
            // },
        ]
    },
    ////////////
    {
        id: 'vsCode_shortcuts',
        name: 'VS Code Shortcuts',
        type: 'shortcut_table',
        external_link: 'https://code.visualstudio.com/docs',
        data: [
            {
                name: 'Open Keyboard Shortcuts',
                mac: 'Command + K Command + S',
                windows: 'Ctrl + K Ctrl + S'
            },
            {
                name: 'Open VSCode Command Palette',
                mac: 'Shift + Command + P',
                // TODO: does this work for git bash?
                windows: 'Shift + Crtl + P'
            },
            {
                name: 'Open User Settings',
                mac: 'Command + ,',
                windows: 'Crtl + ,'
            },
            {
                name: 'Go to File',
                mac: 'Command + P',
                windows: 'Crtl + P'
            },
            {
                name: 'Go to Line',
                mac: 'Ctrl + G',
                windows: 'Ctrl + G'
            },
            {
                name: 'Toggle Code Comment',
                mac: 'Command + ?',
                windows: 'Ctrl + ?'
            },
            {
                name: 'Cut Line or Selection',
                mac: 'Command + X',
                windows: 'Ctrl + X',
                notes: [
                    'This can effectively also be used to quickly delete lines and selections with your non-mouse hand, although the content will still be in your clipboard.'
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
                name: 'Select All Occurrences of Current Selection in Current File',
                mac: 'Shift + Command + L',
                windows: 'Shift + Ctrl + L'
            },
            {
                name: 'Expand/Shrink Current Selection by Word',
                mac: 'Shift + Alt + ←/→',
                windows: 'Shift + Alt + ←/→'
            },
            {
                name: 'Expand/Shrink Current Selection by Character',
                mac: 'Shift + Command + Alt + ←/→',
                windows: 'Shift + Ctrl + Alt + ←/→'
            },
            {
                name: 'Expand/Shrink Current Selection',
                mac: 'Ctrl + Shift + Command + ←/→',
                windows: 'Ctrl + Shift + Command + ←/→'
            },
            {
                name: 'Select Entire Line / Expand Current Line Selection Down',
                mac: 'Command + L',
                windows: 'Ctrl + L'
            },
            {
                name: 'Move Line Up/Down',
                mac: 'Option + ↑/↓',
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
                name: 'Move Cursor to End of Next Word',
                mac: 'Option + →',
                windows: 'Alt + →'
            },
            {
                name: 'Move Cursor to Start of Prior Word',
                mac: 'Option + ←',
                windows: 'Alt + ←'
            },
            {
                name: 'Multi-Cursor Editing',
                mac: 'Option + Click',
                windows: 'Alt + Click',
                notes: [
                    'If you also hold Select you can edit multiple selections at once or double-click multiple words to edit them all at once.'
                ]
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
                mac: 'Option + G',
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
                    'You can also use Tab or Shift + Tab for indenting but the nice thing about using the shorcut with brackets is that the cursor can be anywhere on the line and it will move the whole line without separating text. For instance, even if the cursor is in the middle of a line of text it will still only move the whole line.'
                ]
            },
            {
                name: 'Delete by Word',
                mac: 'Option + Delete',
                windows: '?????'
            },
            {
                name: 'Forward Delete (characters in front of the cursor)',
                mac: 'Ctrl + D',
                windows: '?????',
                notes: [
                    'The Delete key on most Mac keyboards will delete from right to left in the same way as the Backspace key does on other keyboards. Many non-Mac keyboards have a Delete or DEL key that permorm "Forward Delete" and deletes text in the opposite way as Mac Delete, so this shortcut allows users without the non-Mac Delete key to achieve Forward Delete.'
                ]
            },
            {
                name: 'Forward Delete by Word',
                mac: 'Fn + Option + Delete',
                windows: '?????'
            },
            {
                name: 'Delete Word Behind Cursor',
                mac: 'Option + Delete',
                windows: '?????'
            },
            {
                name: 'Delete Line Behind Cursor',
                mac: 'Command + Delete',
                windows: '?????'
            },
            {
                name: 'Toggle Terminal',
                mac: 'Control + ~',
                // TODO: does this work for git bash?
                windows: 'Crtl + ~'
            },
            {
                name: 'Traverse Through Open Files/Tabs',
                mac: 'Option + Command + ←/→',
                windows: '??????'
            },
            {
                name: 'Find & Replace in Current File',
                mac: 'Option + Command + F',
                // TODO: is this actually Ctrl + H for windows?
                windows: 'Alt + Ctrl + F'
            },
            {
                name: 'Find in Project',
                mac: 'Shift + Command + F',
                windows: 'Shift + Ctrl + F'
            },
            {
                name: 'Format Currently Selected Code',
                mac: 'Command + K Command + F',
                windows: 'Ctrl + K Ctrl + F',
                notes: [
                    // TODO: Look into this:
                    'Might not respect previous tab spacing.'
                ]
            },
            {
                name: 'Format Whole File',
                mac: 'Shift + Option + F',
                windows: 'Shift + Alt + F'
            },
        ]
    },
    ////////////
    {
        id: 'vsCode_tools',
        name: 'VS Code Tools & Extentions',
        data: [
            {
                // TODO: Emmet cheatsheet link: https://docs.emmet.io/cheat-sheet/  
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