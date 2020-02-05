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
        // https://support.google.com/chrome/answer/157179?hl=en
        id: 'browser_shortcuts',
        name: 'Browser Shortcuts',
        type: 'shortcut_table',
        data: [
            {
                name: 'Developer tools',
                mac: 'Option + Command + I',
                windows: 'Option + Ctrl + I'
            },
            {
                name: 'JavaScript console',
                mac: 'Option + Command + J',
                windows: 'Option + Ctrl + J'
            },
            {
                name: 'Inspect elements',
                mac: 'Option + Command + C',
                windows: 'Option + Ctrl + C'
            },
            {
                name: 'Refresh page',
                mac: 'Command + R',
                windows: 'Ctrl + R'
            },
            {
                name: 'Force refresh',
                mac: 'Shift + Command + R',
                // TODO: do these both work?:
                windows: 'Shift + Command + R',
                windows: 'Ctrl + F5 or Ctrl + Click Browser Reload',
                notes: [
                    'Force Refresh will clear the browser’s cache for a specific page and force it to load the most recent version of a page.'
                ]
            },
            {
                name: 'New tab',
                mac: 'Command + T',
                windows: 'Ctrl + T'
            },
            {
                name: 'Close tab',
                mac: 'Command + W',
                windows: 'Ctrl + W'
            },
            {
                name: 'Reopen closed tabs in order closed',
                mac: 'Shift + Command + T',
                windows: 'Shift + Ctrl + T'
            },
            {
                name: 'Traverse tabs',
                mac: 'Option + Command + ←/→',
                windows: 'Option + Ctrl + ←/→'
            },
            {
                name: 'Open new window in incognito mode',
                mac: 'Command + Shift + N',
                windows: 'Ctrl + Shift + N'
            },
            {
                name: 'Jump to address bar',
                mac: 'Command + L',
                windows: 'Ctrl + L'
            },
            // {
            //     name: 'Remove predictions from your address bar',
            //     mac: '',
            //     windows: ''
            // },
            {
                name: 'Save your current webpage as a bookmark',
                mac: 'Command + D',
                windows: 'Ctrl + D'
            },
            {
                name: 'Open bookmarks manager',
                mac: 'Command + Option + B',
                windows: 'Ctrl + Shift + O'
            },
        ]
    },
    ////////////
    {
        id: 'vsCode_shortcuts',
        name: 'VS Code Shortcuts',
        type: 'shortcut_table',
        external_links: [
            'https://code.visualstudio.com/docs',
        ],
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
        type: 'descriptive_section',
        data: [
            {
                name: 'Emmet',
                description: 'Emmet provides you with many  helpful shortcuts and patterns for generating groups of HTML and CSS code dymanically on the fly. For example, if you want to create a nav bar with a list of 5 links you can type "nav>ul>li*5>a" followed by the Tab key. Modern versions of VSCode include Emmet out-of-the-box.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://docs.emmet.io/'
                    },
                    {
                        linkDescription: 'Cheatsheet',
                        href: 'https://docs.emmet.io/cheat-sheet/'
                    }
                ]
            },
            {
                name: 'Snippets',
                description: 'Snippets are predefined and customizable templates that allow you to generate repeating code patterns by only entering a short and unique series of text. There are predefined snippets that come with VSCode but you can also create and customize your own snippets or use popular snippet libraries that have been created for the VSCode marketplace.',
                external_links: [
                    { 
                        linkDescription: 'Create Your Own Snippets',
                        href: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets'
                    },
                    {
                        linkDescription: 'Marketplace Extension: JavaScript (ES6) code snippets',
                        href: 'https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets'
                    },
                    {
                        linkDescription: 'Marketplace Extension: ES7 React/Redux/GraphQL/React-Native snippets',
                        href: 'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets'
                    },

                ]
            },
            {
                name: 'ESLint',
                description: 'This extension is a popular open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic code or code that doesn\'t adhere to certain style guidelines.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://eslint.org/'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint'
                    }
                ]
            },
            {
                name: 'Prettier',
                description: 'This extension is an opinionated code formatter that saves you time and energy by automatically removing original user code styling and ensuring that outputted code conforms to a consistent style.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://prettier.io/'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint'
                    }
                ]
            },
            {
                name: 'Quokka.js',
                description: 'This extension is a rapid prototyping playground in your editor that allows you see the result of your programs being run right next to your code, as you type.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://quokkajs.com/docs/'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode'
                    }
                ]
            },
            {
                name: 'Live Server',
                description: 'This extension can launch a local development server with a live reload feature so that when you save your project any changes you\'ve made will be reflected in the browser without you having to manually refresh it.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://github.com/ritwickdey/vscode-live-server'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'
                    }
                ]
            },
            {
                name: 'Colorizer',
                description: 'This extension is great for situations when you\'re using abstract values for CSS colors instead the actual name of the color. For instance, instead of using color names it\'s common to use values in units such as RGB, HEX, HSL, etc, but unless you\'re a CSS color guru it\'s not going to be immediately clear what colors these values correspond to. Colorizer helps you instantly visualize what colors these values corresponding by highlighting the value background in your code.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://github.com/kamikillerto/vscode-colorize'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize'
                    }
                ]
            },
            {
                name: 'Bracket Pair Colorizer',
                description: 'This extension allows matching brackets to be identified with colors so it\'s easier to recognize where code blocks start and end, which allows you to more easily manage your code and identify mismatched brackets and out-of-place code.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://github.com/CoenraadS/BracketPair'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: ' https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks'
                    }
                ]
            },
            {
                name: 'CSS Peak',
                description: 'This extension allows you to view and make edits to your CSS without having to actually open your CSS files and find the corresponding rule.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://github.com/pranaygp/vscode-css-peek'
                    },
                    { 
                        linkDescription: 'VSCode Marketplace',
                        href: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek'
                    }
                ]
            },
            {
                name: 'VS Code Intellisense',
                description: 'VS Code IntelliSense provides intelligent code completions based on language semantics and an analysis of your source code. If a language service knows possible completions, the IntelliSense suggestions will pop up as you type. If you continue typing characters, the list of members (variables, methods, etc.) is filtered to only include members containing your typed characters. VS Code IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS, and Less out of the box. VS Code supports word based completions for any programming language but can also be configured to have richer IntelliSense by installing a language extension. When using Intellisense, pressing Tab or Enter will insert the selected member. You can trigger IntelliSense in any editor window by typing Command + Space.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://code.visualstudio.com/docs/editor/intellisense'
                    }
                ]
            },
        ]
    },
    ////////////
    {
        // TODO: add examples and options fields?
        id: 'command_line',
        name: 'Command Line',
        type: 'descriptive_section',
        data: [
            {
                name: 'cd',
                description: 'Change the working directory (i.e. the current folder you\'re in).',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'pwd',
                description: 'Displays the name and path of the current working directory that you are in.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'ls',
                description: 'Displays a list of all files in the current working directory and allows you to view information about each of the files.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'mkdir',
                description: 'Creates a new directory.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'touch',
                description: 'Creates a new file.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'mv',
                description: 'Move and/or rename files.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'cat',
                description: 'Add text to files. View contents of files. Create new files.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'man',
                description: 'Displays a user manual for a command.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'help',
                description: 'Displays a list of all available commands.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'rm',
                description: 'Deletes files and directorties.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'ps',
                description: 'Displays a list of the currently running processes (e.g. instance of a computer program that is currently running) and information associated with those processes like Process ID (PID), which can be helpful when you\'d like to force-close unresponsive programs, particularly command line programs with no GUI.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
            {
                name: 'clear',
                description: 'Clears the command line window of previous commands and responses. The history is typically still preserved and can be viewed by scrolling up.',
                external_links: [
                    {
                        linkDescription: '',
                        href: ''
                    },
                ]
            },
        ]
    },
    ////////////
    {
        id: 'git_commands',
        name: 'Git Commands',
        type: '',
        external_links: [
            {
                linkDescription: 'Git Documentation',
                href: 'https://code.visualstudio.com/docs'
            },
            {
                linkDescription: 'Git Cheat Sheet',
                href: 'https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf0'
            },
            {
                linkDescription: 'Git Visual Cheat Sheet',
                href: 'https://ndpsoftware.com/git-cheatsheet.html'
            },
        ],
        // TODO: add options fields?
        data: [
            {
                name: 'git init',
                description: 'Creates an empty Git repository locally.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-init'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init'
                    }
                ]
            },
            {
                name: 'git clone',
                description: 'Creates a copy of a repository into a new local directory, starts tracking remote branches and creates and checks out a new branch that is linked to the cloned repository.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-clone'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone'
                    },
                    { 
                        linkDescription: 'Cloning vs Forking - Blog post by Bryan Pendleton',
                        href: 'https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone'
                    }
                ]
            },
            {
                name: 'git remote',
                description: 'Create, view, and delete connections to other repositories.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: ''
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/syncing'
                    }
                ]
            },
            {
                name: 'git fetch',
                description: 'Download content from another repository, allowing you to view changes between your local repository and a remote repository since your last pull. Does not merge remote changes into your local repository (see git pull).',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-fetch'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/syncing/git-fetch'
                    },
                    { 
                        linkDescription: 'Git Fetch vs. Git Pull',
                        href: 'https://stackoverflow.com/a/292359/8674094'
                    }
                ]
            },
            {
                name: 'git status',
                description: 'Displays the status of the current git directory, including information like the files that are being tracked, changes not staged for commit and changes to be committed.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-status'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/inspecting-a-repository'
                    }
                ]
            },
            {
                name: 'git diff',
                description: 'Displays differences between two inputs, such as different iterations of a file, commits, branches, working tree, etc. It\'s most commonly used to view changes made to a file since the last commit.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-diff'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/saving-changes/git-diff'
                    },
                    { 
                        linkDescription: 'Comparing files with git diff - Blog post by Veera Sundar',
                        href: 'https://veerasundar.com/blog/2011/06/git-tutorial-comparing-files-with-diff/'
                    }
                ]
            },
            {
                name: 'git add',
                description: 'Places files into a status that allows changes to be committed. This status is often referred to as the "index" or the "staging area".',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-add'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/saving-changes'
                    }
                ]
            },
            {
                name: 'git commit',
                description: 'Record changes in the staging area to the repository.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-commit'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/saving-changes/git-commit'
                    }
                ]
            },
            {
                name: 'git log',
                description: 'Displays a log of commits made. By default it includes the commit ID, message, author and date',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-log'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/git-log'
                    }
                ]
            },
            {
                name: 'git push',
                description: 'Save local repository content that has been committed to a remote repository.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-push'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/syncing/git-push'
                    }
                ]
            },
            {
                name: 'git pull',
                description: 'Fetches content from a remote repository and merges it with another repository or local branch.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-pull'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone'
                    },
                    { 
                        linkDescription: 'Git Fetch vs. Git Pull',
                        href: 'https://stackoverflow.com/a/292359/8674094'
                    }
                ]
            },
            {
                name: 'git branch',
                description: 'List, create, rename or delete branches.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-branch'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/using-branches'
                    }
                ]
            },
            {
                name: 'git checkout',
                description: 'Switch branches or restore working tree files. ',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-checkout'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/using-branches',
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial - Feature Branch Workflow',
                        href: 'https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow',
                    },
                ]
            },
            {
                name: 'git merge',
                description: 'Combine independent branches of development.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-merge'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/using-branches/git-merge'
                    }
                ]
            },
            {
                name: 'git reset',
                description: '',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-reset'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/undoing-changes/git-reset'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial - Resetting, Checking Out & Reverting',
                        href: 'https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting'
                    }
                ]
            },
            {
                name: 'git revert',
                description: 'Undos the changes introduced by a specific commit and creates a new commit based on those reverted changes and keeps the project history intact.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-revert'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/undoing-changes/git-revert'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial - Resetting, Checking Out & Reverting',
                        href: 'https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting'
                    }
                ]
            },
            {
                name: 'git stash',
                description: '',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: ''
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/saving-changes/git-stash'
                    }
                ]
            },
            {
                name: 'git rm',
                description: '',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: ''
                    },
                    { 
                        linkDescription: '',
                        href: 'https://www.atlassian.com/git/tutorials/undoing-changes/git-rm'
                    },
                ]
            },
        ]
    },
    ////////////
    // {
    //     id: 'data_types',
    //     name: 'Data Types',
    //     type: '',
    //     data: [
    //         {
    //             name: 'Primitive Values',
    //             description: 'In JavaScript all types other than objects are referred to as "primitive values" and are incapable of being changed or "immutable".',
    //             primitiveTypes: [
    //                 {
    //                     name: 'boolean',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'bigInt',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'number',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'null',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'string',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'symbol',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'undefined',
    //                     description: '',
    //                     examples: []
    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Objects',
    //             description: '',
    //             objectTypes: [
    //                 {
    //                     name: 'Objects',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'Functions',
    //                     description: '',
    //                     examples: []
    //                 },
    //                 {
    //                     name: 'Arrays',
    //                     description: '',
    //                     examples: []
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // ////////////
    // {
    //     id: 'operators',
    //     name: 'Operators',
    //     type: '',
    //     data: [

    //     ]
    // },
    ////////////
    // {
    //     id: 'variables',
    //     name: 'Variables',
    //     type: '',
    //     data: [
    //         {
    //             name: 'let',
    //             description: '',
    //             examples: [
                    
    //             ]
    //         },
    //         {
    //             name: 'const',
    //             description: '',
    //             examples: [

    //             ]
    //         },
    //         {
    //             name: 'var',
    //             description: '',
    //             examples: [

    //             ]
    //         }
    //     ]
    // },
    ////////////
    // {
    //     id: 'functions',
    //     name: 'Functions ',
    //     type: '',
    //     data: [
    //     ]
    // },
    ////////////
    // {
    //     id: 'loops',
    //     name: 'Loops',
    //     type: '',
    //     data: [

    //     ]
    // },
    // {
    //     id: 'control_statements',
    //     name: 'Control Statements ',
    //     type: '',
    //     data: [

    //     ]
    // },
    // {
    //     id: 'scopes',
    //     name: 'Scope & Closures',
    //     type: '',
    //     data: [

    //     ]
    // },
]

export default data