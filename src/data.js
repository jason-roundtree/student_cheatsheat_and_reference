const data = [
    {
        id: 'basic_shortcuts',
        name: 'Basic Keyboard Shortcuts',
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
        name: 'Browser Keyboard Shortcuts',
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
        name: 'VS Code Keyboard Shortcuts',
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
        type: 'descriptiveWithCode',
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
                description: 'ESLint is a popular open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic code or code that doesn\'t adhere to certain style guidelines.',
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
                description: 'Prettier is an opinionated code formatter that saves you time and energy by automatically removing original user code styling and ensuring that outputted code conforms to a consistent style.',
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
                description: 'Live Server can launch a local development server with a live reload feature so that when you save your project any changes you\'ve made will be reflected in the browser without you having to manually refresh it.',
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
                description: 'Colorizer is great for situations when you\'re using abstract values for CSS colors instead the actual name of the color. For instance, instead of using color names it\'s common to use values in units such as RGB, HEX, HSL, etc, but unless you\'re a CSS color guru it\'s not going to be immediately clear what colors these values correspond to. Colorizer helps you instantly visualize what colors these values corresponding by highlighting the value background in your code.',
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
                description: 'Bracket Pair Colorizer allows matching brackets to be identified with colors so it\'s easier to recognize where code blocks start and end, which allows you to more easily manage your code and identify mismatched brackets and out-of-place code.',
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
                name: 'CSS Peek',
                description: 'CSS Peek allows you to view and make edits to your CSS without having to actually open your CSS files and find the corresponding rule.',
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
        name: 'Command Line Interface',
        type: 'descriptiveWithCode',
        data: [
            {
                name: 'cd',
                description: 'Change the working directory (i.e. the current folder you\'re in).',
            },
            {
                name: 'pwd',
                description: 'Displays the name and path of the current working directory that you are in.',
            },
            {
                name: 'ls',
                description: 'Displays a list of all files in the current working directory and allows you to view information about each of the files.',
            },
            {
                name: 'mkdir',
                description: 'Creates a new directory.',
            },
            {
                name: 'touch',
                description: 'Creates a new file.',
            },
            {
                name: 'mv',
                description: 'Move and/or rename files.',
            },
            {
                name: 'cat',
                description: 'Add text to files. View contents of files. Create new files.',
            },
            {
                name: 'man',
                description: 'Displays a user manual for a command.',
            },
            {
                name: 'help',
                description: 'Displays a list of all available commands.',
            },
            {
                name: 'rm',
                description: 'Deletes files and directorties.',
            },
            {
                name: 'ps',
                description: 'Displays a list of the currently running processes (e.g. instance of a computer program that is currently running) and information associated with those processes like Process ID (PID), which can be helpful when you\'d like to force-close unresponsive programs, particularly command line programs with no GUI.',
            },
            {
                name: 'clear',
                description: 'Clears the command line window of previous commands and responses. The history is typically still preserved and can be viewed by scrolling up with the arrow key.',
            },
        ]
    },
    ////////////
    {
        id: 'git_commands',
        name: 'Git Commands',
        type: 'descriptiveWithCode',
        sectionDescription: '',
        definitions: [
            {
                name: 'Local Repository',
                definition: 'Your local copy of a project repository that you can independently make changes to.'
            },
            {
                name: 'Remote Repository',
                definition: 'Remote repositories are versions of your project that are hosted on the Internet or network somewhere, as opposed to your local working copy. Typically everybody involved on a project works from (git pull) and saves to (git push) a remote repository.'
            },
            {
                name: 'Working Directory / Working Tree',
                definition: 'The checked-out state of a project\'s files and folders on your local machine. You must tell Git to track changes to files by running a git add command. You can view the status of the Working Directory by running the command git status.'
            },
            {
                name: 'Staging Area / Index',
                definition: 'A local cache where changes to your Git-tracked files are stored before they can be committed. Changes are recorded to the staging area with the git add command.'
            },            
            {
                name: 'Commit',
                definition: 'A snapshot of a project at a particular point in time. One of the reasons Git is so powerful is because it allows you to easily preserve, view and edit a project\'s history of changes.'
            },    
            {
                // https://www.git-tower.com/learn/git/glossary/origin
                name: 'Origin',
                definition: 'An alias used i remote repository url. Typically it refers to the central repository that you are pushing and pulling from. It is most commonly named "origin" because that\'s what Git names it by default when you clone a remote repo for the first time, but you can also rename it.'
            },        
            {
                name: 'Master',
                definition: 'The default development branch. Whenever you create a git repository, Git creates a branch called "master" and checks it out for you.'
            },
            {
                name: 'HEAD',
                definition: 'A reference to the last commit in the currently checked-out branch.'
            },
            {
                name: 'Detached HEAD',
                definition: 'When a specific commit is checked out instead of a branch. When you make changes and commit them in this state, these changes do NOT belong to any branch.'
            },
            {
                name: 'Branch',
                definition: 'Branches represent independent lines of development, each with it\'s own working directory, staging area and project history.'
            },
            {
                // https://help.github.com/en/github/getting-started-with-github/fork-a-repo
                // https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow
                // http://bryanpendleton.blogspot.com/2014/07/git-clone-vs-fork.html
                // https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github/9257901#9257901
                name: 'Fork',
                definition: 'A fork is a copy of a repository and it\'s most often used when contributing to open source software. When you fork a repository it gives you your own remote copy, which you can then clone and work on locally before pushing changes back to your remote forked copy without affecting the original project. Once you\'ve pushed your changes to your remote copy you can submit a pull request to the original project maintainer. Note that forking is similar to cloning a repository but has important differences (see links above).'
            },
            {
                // http://bryanpendleton.blogspot.com/2014/07/git-clone-vs-fork.html
                // https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github/9257901#9257901
                name: 'Clone',
                definition: 'A local copy of a remote repository. You often clone a repository when you want to contribute to an group/organizational project. Note that cloning is similar to forking a repository but has important differences (see links above).'
            },
            {
                // https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests
                name: 'Pull Request',
                definition: 'Pull requests let you tell others about changes you\'ve pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.'
            },
            {
                name: 'Untracked Files',
                definition: 'Any files in your working directory that Git is aware of but have not been commited or staged for commit.'
            },
            {
                name: 'Merge',
                definition: 'A merge occurs when you combine multiple sequences of Git histories. Most frequently used to combine two branches or combining remote changes into your local repository.'
            }
            // {
            //     name: 'Upstream Branch',
            //     definition: ''
            // },
            // {
            //     name: 'Fast-Forward',
            //     definition: ''
            // },
        ],
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
                        href: 'http://bryanpendleton.blogspot.com/2014/07/git-clone-vs-fork.html'
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
                description: 'Displays differences between two inputs, such as different iterations of a file, commits, branches, working directory, etc. It\'s most commonly used to view changes made to a file since the last commit.',
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
                description: 'Switch branches or restore Working Directory files. ',
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
                description: 'A versatile and potentially dangerous command that is often used to undo changes introduced by a given commit by moving the tip of a branch to a prior commit or removing changed files from the Staging Area. You can use the command with different options that affect changes in the Working Directory and Staging Area differently, but all options can permanently remove changes you\'ve made in some form or another so use reset with caution. It is generally advisable that you do not use reset to undo changes that have already been pushed to a public repository since other contributers could\'ve already started working off those changes, which can later cause conflicts and confusion.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-reset'
                    },
                    { 
                        linkDescription: 'Documentation - Git Reset Demystified',
                        href: 'https://www.atlassian.com/git/tutorials/undoing-changes/git-resethttps://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified'
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
                description: 'Undo the changes introduced by a specific commit and creates a new commit based on those reverted changes and keeps the project history intact. Since revert keeps the history you typically want to use it when undoing commits that have been pushed to a public repository.',
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
                description: 'Take the dirty state of your Working Directory — that is, your modified tracked files and staged changes — and temporarily store it on a stack of unfinished changes that you can reapply at any time (even on a different branch). This allows you to do things like work on another branch or pull remote changes without committing the unfinished changes.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-stash'
                    },
                    {
                        linkDescription: 'Documentation - Stashing and Cleaning',
                        href: 'https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/saving-changes/git-stash'
                    }
                ]
            },
            {
                name: 'git rm',
                description: 'Remove files from a Git repository (either from the Staging Area or the Staging Area and the Working Directory).', 
                // It can be thought of as the inverse of the git add command.',
                external_links: [
                    {
                        linkDescription: 'Documentation',
                        href: 'https://git-scm.com/docs/git-rm'
                    },
                    { 
                        linkDescription: 'Atlassian Tutorial',
                        href: 'https://www.atlassian.com/git/tutorials/undoing-changes/git-rm'
                    },
                ]
            },
        ]
    },
    // ////////////
    {
        id: 'js_array_methods',
        name: 'JavaScript Array Methods',
        type: 'descriptiveWithCode',
        external_links: [
            {
                linkDescription: 'Mozilla Developer Network',
                href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/'
            }
        ],
        data: [
            {
                name: 'concat',
                description: 'Merges two or more arrays. This method does not change the existing array, but instead returns a new array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat'
                    }
                ]
            },
            {
                name: 'every',
                description: 'Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'
                    }
                ]
            },
            {
                name: 'filter',
                description: 'Creates a new array with all elements that pass the test implemented by the provided function.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
                    }
                ]
            },
            
            {
                name: 'find',
                description: 'Returns the value of the first element in the provided array that satisfies the provided testing function.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find'
                    }
                ]
            },
            {
                name: 'findIndex',
                description: 'Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex'
                    }
                ]
            },
            {
                name: 'forEach',
                description: 'Executes a provided function once for each array element. Returns `undefined`.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'
                    }
                ]
            },
            {
                name: 'includes',
                description: 'Determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes'
                    }
                ]
            },
            {
                name: 'indexOf',
                description: 'Returns the first index at which a given element can be found in the array, or -1 if it is not present.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf'
                    }
                ]
            },
            {
                name: 'join',
                description: 'Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join'
                    }
                ]
            },
            {
                name: 'lastIndexOf',
                description: 'Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards from the last position by default.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf'
                    }
                ]
            },
            {
                name: 'map',
                description: 'Creates a new array populated with the results of calling a provided function on every element in the calling array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
                    }
                ]
            },
            {
                name: 'pop',
                description: 'Removes the last element from an array and returns that element. This method changes the length of the array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop'
                    }
                ]
            },
            {
                name: 'push',
                description: 'Adds one or more elements to the end of an array and returns the new length of the array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push'
                    }
                ]
            },
            {
                name: 'reduce',
                description: 'Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
                    }
                ]
            },
            {
                name: 'reverse',
                description: 'Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse'
                    }
                ]
            },
            {
                name: 'shift',
                description: 'Removes the first element from an array and returns that removed element. This method changes the length of the array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift'
                    }
                ]
            },
            {
                name: 'slice',
                description: 'Returns a shallow copy of a portion of an array into a new array selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'
                    }
                ]
            },
            {
                name: 'sort',
                description: 'Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort'
                    }
                ]
            },
            {
                name: 'splice',
                description: 'Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice'
                    }
                ]
            },
            {
                name: 'unshift',
                description: 'Adds one or more elements to the beginning of an array and returns the new length of the array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift'
                    }
                ]
            },
            {
                name: 'Array.from',
                description: 'Creates a new, shallow-copied Array instance from an array-like or iterable object (e.g. HTMLCollection, NodeList, Map, Set, etc.). NOTE: If you\'re using ES6 JavaScript you can also use the spread operator to achieve the same thing.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from'
                    }
                ]
            },
            {
                name: 'Array.isArray',
                description: 'Determines whether the passed value is an Array.',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray'
                    }
                ]
            },
            {
                name: 'Array.of',
                description: 'Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).',
                external_links: [
                    {
                        linkDescription: 'MDN',
                        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of'
                    }
                ]
            }
        ]
    },
    ////////////
    {
        id: 'javascript_functions',
        name: 'JavaScript Functions ',
        type: 'descriptiveWithCode',
        external_links: [
            {
                linkDescription: '6 Ways to Declare JavaScript Functions by Dmitri Pavlutin',
                href: 'https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/#21-named-function-expression'
            },
        ],
        data: [
            // TODO: way to get these to ignore whitespace so functions can have proper indentation here?
            // TODO: add get and set style methods?
            {
                name: 'function declaration/statement',
                description: 'A standard function with a name.',
                code: `
    function doSomething() {
        return 'Something!';
    }
                `
            },
            {
                name: 'anonymous function',
                description: 'Often used as callbacks or assigned to a variable in function expressions.',
                code: `
    function() {
        return 'Something!';
    }
                `
            },
            {
                name: 'function expression',
                description: 'Since functions are first-class and can be treated like other types of values you can assign a function to a variable that can then be used to call the function.',
                code: `
    const doSomething = function() {
        return 'Something!';
    };
                `
            },
            {
                name: 'named function expression',
                description: 'Similar to a function expression but with a name instead of just an anonymous function. Usually you won\'t use this form or see it too often but it can be helpful because it allows function expressions to be identified in stack-trace errors and for expressions to be called from within themselves when working with recursion.',
                code: `
    const doSomething = function something() {
        return 'Something!';
    };
                `
            },
            {
                name: 'ES6 arrow function',
                description: '',
                code: `
    const doSomething = () => {
        return 'Something!';
    };

    // with only 1 parameter the parens are optional
    const doSomething = thing => {
        return \`Do this: \${thing}!\`;
    };

    // with one line and implicit return you don't need curly brackets
    const doSomething = () => 'Something!'; 
            `
            },
            {
                name: 'function as object method',
                description: '',
                code: `
    const person = {
        name: 'Jason',
        introduce: function() {
            return \`Hello! My name is \${this.name}\`;
        }
    }
                `
            },
            {
                name: 'ES6 shorthand-function as object method',
                description: 'You can omit the word \'function\' and place the parens directly after the function name.', 
                code: `
    const person = {
        name: 'Jason',
        introduce() {
            return \`Hello! My name is \${this.name}\`;
        }
    }
                `
            },
            {
                name: 'immediately invoked function expression (IIFE - pronounced “iffy”)',
                description: 'A function that is executed immediately. IIFEs were used more frequently in older versions of JavaScript as a way to create modules and keep code private and out of the global scope.',
                code: `
    (function() {
        return 'Something!'
    })();

    // with ES6 arrow function
    (() => {
        return 'Something!'
    })();

    // Note: There some other ways to write IIFEs but these are probably the most common
                `
            },
            {
                name: 'constructor function',
                description: 'Pre-ES6 way to use a function that acts as a "blueprint" for creating objects. The convention is that the name of the function should start with an upper-case letter so that it\'s easily reconizable as a contructor. The function parameters will often be named the same thing as the object properties inside the function but they don\'t have to be, as the example below shows.',
                code: `
    function Person(n, a) {
        this.name = n;
        this.age = a;
        // adding a function inside the constructor will
        // add the function to each object created
        // by this constructor, which is often 
        // unecessary since it takes up more memory
        this.sayHelloV1 = function() {
            return \`Hello! My name is \${this.name} and I'm \${this.age} years young!\`;
        };
    }
    
    // by adding a function to Person.prototype 
    // you allow all Person objects to access it
    Person.prototype.sayHelloV2 = function() {
        return \`Hello! My name is \${this.name} and I'm \${this.age} years young!\`
    } 

    // create new Person object
    const joeBlow = new Person('Joe Blow', 30);
                            `
            },
            {
                name: 'functions as methods of ES6 class',
                description: '',
                code: `
    class Person {
        // built-in constructor function that comes with class
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }

        // user-defined method that gets added to Person.prototype 
        // so all Person objects can access it
        sayHello() {
            return \`Hello! My name is \${this.name} and I'm \${this.age} years young!\`;
        }

        // Adding the "static" keyword before a function name defines 
        // a static method for a class. Static methods are called without 
        // instantiating their class and cannot be called through a class instance. 
        static staticMethodHere() {
            return "I'm a static method that can only be called from the Person class itself!";
        }
    }
    // create new Person object:
    const joeBlow = new Person('Joe Blow', 30);
    // call prototype method:
    joeBlow.sayHello();
    // call static method
    Person.staticMethodHere();
                `
            },
        ]
    },
    ////////////
    {
        id: 'loops',
        name: 'JavaScript Loops',
        type: 'descriptiveWithCode',
        data: [
            {
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
                name: 'for',
                description: 'Gives you control over how the loop starts, runs, and ends. Most commonly used to loop over arrays and strings.',
                syntax: `for ([initializer], [condition to evaluate], [post-loop expression]) { 
                    [statement]
                }`,
                code: `
    // common form used to iterate through each value in an array or another iterable from start to end
    for (let i = 0; i < iterable.length; i++) { ... }

    // loop from end of iterable to start
    for (let i = iterable.length - 1; i > -1; i--) { ... }        

    // loop over every other item of a iterable starting from the third item
    for (let i = 2; i < iterable.length; i += 2) { ... }
                
    // loops can be nested
    for (let i = 0; i < iterableOne.length; i++) {
        for (let j = 0; j < iterableTwo.length; j++) {
            ...
        }
     }
            `
            },
            {
                name: 'for-of',
                description: 'Creates a loop iterating over iterable objects such as String, Array, array-like objects (e.g. HTMLCollection, NodeList), Map, Set, and user-defined iterables. Does not loop over normal JavaScript objects (see For-in loop, Object.keys, Object.values, Object.entries).',
                syntax: 'for ([variable] of [iterable]) {}',
                code: `
    const technologies = ['JS', 'HTML', 'CSS'];
    for (const val of technologies) {
        console.log(value); // logs 'JS', 'HTML', 'CSS'
    }

    // If you'll be reassigning/operating on the values you're looping over you can declare the variable with let instead of const
    const numbers = [10, 20, 30];
    for (let val of numbers) {
        value += 1;
        console.log(value); // logs 11, 21, 31
    }
            `
            },
            {
                name: 'for-in',
                description: 'Iterates over all enumerable properties of an object, including inherited properties/methods from the prototype chain (see 2nd example below). Most object properties that you\'ll create will be enumerable, but it\'s possible to set properties to be non-enumerable so that they don\'t show up in for-in loops.',
                syntax: 'for ([variable] in [iterable]) {}',
                code: `
    const myObject = { a: 1, b: 2, c: 3 };
    for (const property in myObject) {
        console.log(\`\${property}: \${myObject[property]}\`); // logs "a: 1", "b: 2", "c: 3"
    }

    // Example showing that enumerable, prototype properties are iterated 
    function Person(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Person.prototype.sayHello = function() {
        return \`Hello! My name is \${this.firstName} \${this.lastName}!\`;
    } 
    const jason = new Person('jason', 'roundtree')
    for (const property in jason) {
        console.log(property); // logs 'jason', 'roundtree', 'sayHello'
        // To check if a property exists on an object and is not inherited you can use the .hasOwnProperty method
    }
    // NOTE: prototype methods on ES6 classes are not enumerable and will not show up in for-in loops
                `
            },
            {
                name: 'while',
                description: '',
                syntax: 'while ([condition]) { [statement] }',
                code: `
    let i = 0;
    while (i < 3) {
        console.log(i); // logs 0, 1, 2
        i++;
    }
                `
            },
            {
                name: 'do-while',
                description: 'Similar to a while loop, but executes the statement at least once, even if the condition starts out as false.',
                syntax: 'do { [statement] } while ([condition])',
                code: `
    let i = 0;
    do {
        console.log(i) // logs 0, 1, 2
        i++;
    } while (i < 3 && i !== 0);
                `
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
                name: 'forEach',
                description: 'Executes the provided function callback once for each array elemen in ascending order. Always returns "undefined".',
                syntax: `array.forEach(function callback(currentValue, indexOfCurrentValue, ArrayBeingIterated) {

                }, thisContext)`,
                code: `
    const array = ['a', 'b', 'c'];
    array.forEach(item => {
        console.log(item); // logs 'a', 'b', 'c'
    });            
                `
            },
            {
                name: 'map',
                description: 'Creates a new array populated with the results of calling a provided callback function on every element in the array being mapped. Unlike .forEach, .map returns the updated array.',
                syntax: `const newArray = array.map(function callback(currentValue, indexOfCurrentValue, ArrayBeingIterated) {

                }, thisContext)`,
    // TODO: add another example that shows index, array, this
                code: `
    const numbers = [1, 4, 9];
    const squareRoot = number => Math.sqrt(number)
    const roots = numbers.map(squareRoot);
    console.log(roots) // [1, 2, 3]
                `
            },
            {
                name: 'other loops with built-in JavaScript array methods',
                // TODO: add link to array methods section and/or MDN
                description: 'Similar to .forEach and .map, JavaScript has other built-in, functional array methods that loop over arrays and perform a specific task. See this section and MDN for more info.'
            },
        ]
    },
    ////////////
    {
        id: 'dom',
        name: 'DOM Targeting, Traversing & Manipulation',
        type: 'descriptiveWithCode',
        data: [
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
                name: 'querySelector',
                description: 'Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
                name: 'querySelectorAll',
                description: 'Returns a static (not live) NodeList representing a list of elements matching the specified group of selectors which are descendants of the element on which the method was called.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
                name: 'getElementsByTagName',
                description: 'Returns a live HTMLCollection of elements with the given tag name. All descendants of the specified element are searched, but not the element itself. The returned list is live, which means it updates itself with the DOM tree automatically. Therefore, there is no need to call Element.getElementsByTagName() with the same element and arguments repeatedly if the DOM changes in between calls.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
                name: 'getElementById',
                description: 'Returns an Element object representing the element whose id property matches the specified string. ',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
                name: 'getElementsByClassName',
                description: 'Returns a live HTMLCollection which contains every descendant element which has the specified class name or names.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
                name: 'firstChild',
                description: 'Read-only property that returns a node\'s first child in the tree, or null if the node has no children.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild
                name: 'lastChild',
                description: 'Read-only property that returns the last child of a node. If its parent is an element, then the child is generally an element node, a text node, or a comment node. It returns null if there are no child elements.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
                name: 'childNodes',
                description: 'Read-only property that returns a live NodeList of child nodes of the given element. The first child node is assigned index 0.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children
                name: 'children',
                description: 'Read-only property that returns a live HTMLCollection, which contains all of the child elements of the node upon which it was called.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
                name: 'parentNode',
                description: 'Read-only property that returns the parent of the specified node in the DOM tree.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
                name: 'parentElement',
                description: 'Read-only property returns a DOM node\'s parent Element, or null if the node either has no parent, or its parent isn\'t a DOM Element.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling
                name: 'previousSibling',
                description: 'Read-only property that returns the node immediately preceding the specified one in its parent\'s childNodes list, or null if the specified node is the first in that list.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling
                name: 'nextSibling',
                description: 'Read-only property that returns the node immediately following the specified one in their parent\'s childNodes, or returns null if the specified node is the last child in the parent element.',
                code: ''
            },
            {
                // TODO: find out what "Will return itself" means
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
                name: 'closest',
                description: 'Starting with the target element itself it traverses parents (heading toward the document root) of the element until it finds a node that matches the provided selectorString. Will return itself or the matching ancestor. If no such element exists, it returns null.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
                name: 'append',
                description: 'Inserts a set of Node objects or DOMString objects after the last child of the ParentNode',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend
                name: 'prepend',
                description: 'Inserts a set of Node objects or DOMString objects before the first child of the ParentNode.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
                name: 'appendChild',
                description: 'Adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node)',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
                name: 'remove',
                description: 'Removes the object from the tree it belongs to.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
                name: 'removeChild',
                description: 'Removes a child node from the DOM and returns the removed node.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild
                name: 'replaceChild',
                description: 'Replaces a child node within the given (parent) node.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
                name: 'innerHTML',
                description: 'Gets or sets the HTML markup contained within the element.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
                name: 'textContent',
                description: 'Gets or sets the text content of the node and its descendants.',
                code: ''
            },
            {
                // TODO: leave this in? Definitely note differences between textContent and innerHTML
                // https://www.w3schools.com/jsref/prop_node_innertext.asp
                name: 'innerText',
                description: 'Gets or sets the text content of the specified node, and all its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
                name: 'createElement',
                description: 'Creates the HTML element specified by tagName.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
                name: 'createTextNode',
                description: 'Creates a new Text node. This method can be used to escape HTML characters.',
                code: ''
            },
            // {
            //     // https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
            //     name: 'cloneNode',
            //     description: 'Returns a duplicate of the node on which this method was called.',
            //     code: ''
            // },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
                name: 'setAttribute',
                description: 'Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
                name: 'getAttribute',
                description: 'Returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be null or an empty string',
                code: ''
            },
            // {
            //     // https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
            //     name: 'attributes',
            //     description: 'Returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array, so it has no Array methods and the Attr nodes\' indexes may differ among browsers. To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.',
            //     code: ''
            // },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
                name: 'style',
                description: 'Gets and sets the inline style of an element. When getting, it returns a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element\'s inline style attribute.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
                name: 'className',
                // TODO: validate how this works with multiple classes
                description: 'Gets and sets the value of the class attribute of the specified element. If there are multiple classes on the element then the returned value will be a string of space-separated class names.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
                name: 'insertAdjacentElement',
                description: 'Inserts an element node at a given position relative to the element it is invoked upon.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
                name: 'insertAdjacentHTML',
                description: 'Parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements inside that element. This avoids the extra step of serialization, making it much faster than direct innerHTML manipulation.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText
                name: 'insertAdjacentText',
                description: 'Inserts a given text node at a given position relative to the element it is invoked upon.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
                name: 'insertBefore',
                description: 'Inserts a node before a reference node as a child of a specified parent node. If the given node already exists in the document, insertBefore() moves it from its current position to the new position. (That is, it will automatically be removed from its existing parent before appending it to the specified new parent.)',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
                name: 'contains',
                description: 'Returns a Boolean value indicating whether a node is a descendant of a given node, i.e. the node itself, one of its direct children (childNodes), one of the children\'s direct children, and so on.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName
                name: 'nodeName',
                description: 'Read-only property that returns the name of the current node as a string.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName
                name: 'tagName',
                description: 'Read-only property of the Element interface returns the tag name of the element on which it\'s called. For example, if the element is an <img>, its tagName property is "IMG"',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
                name: 'nodeType',
                description: 'Read-only property that returns an integer that identifies what type of node something is. It distinguishes different kind of nodes from each other, such as elements, text and comments.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue
                name: 'nodeValue',
                description: 'Returns or sets the value of the a node.',
                code: ''
            },
            {
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
                name: 'classList',
                description: 'Read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list. Using classList is a convenient alternative to accessing an element\'s list of classes as a space-delimited string via element.className.',
                code: ''
            },
        ]
    },
    ////////////
    {
        id: 'dom_events',
        name: 'DOM Events',
        type: '',
        // data: [
        //     {
        //         name: 'addEventListener',
        //         description: '',
        //         code: ''
        //     },
        //     {
        //         name: 'removeEventListener',
        //         description: '',
        //         code: ''
        //     },
        // ]
    },
    ////////////
    {
        id: 'control_statements',
        name: 'JavaScript Control Statements ',
        type: '',
        // data: [
        // ]
    },
    ////////////
    {
        id: 'scope',
        name: 'JavaScript Scope & Closures',
        type: '',
        // data: [
        // ]
    },
    ////////////
    // {
    //     id: 'data_types',
    //     name: 'JavaScript Data Types',
    //     type: '',
        // data: [
        //     {
        //         name: 'Primitive Values',
        //         description: 'In JavaScript all types other than objects are referred to as "primitive values" and are incapable of being changed or "immutable".',
        //         primitiveTypes: [
        //             {
        //                 name: 'boolean',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'bigInt',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'number',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'null',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'string',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'symbol',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'undefined',
        //                 description: '',
        //                 examples: []
        //             },
        //         ]
        //     },
        //     {
        //         name: 'Objects',
        //         description: '',
        //         objectTypes: [
        //             {
        //                 name: 'Objects',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'Functions',
        //                 description: '',
        //                 examples: []
        //             },
        //             {
        //                 name: 'Arrays',
        //                 description: '',
        //                 examples: []
        //             },
        //         ]
        //     }
        // ]
    // },
    ////////////
    // {
    //     id: 'operators',
    //     name: 'Operators',
    //     type: '',
    //     data: [
    //         {
    //         },
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
    // }
]

export default data