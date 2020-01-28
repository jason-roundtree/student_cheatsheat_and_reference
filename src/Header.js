import React from 'react'

export default function Header() {
    return (
        <header>
            <h1>Cheatsheet & Reference</h1>
            <h2>Table of Contents</h2>
            <nav>
                {/* TODO: change this to loop over data so you don't have to keep manually updating */}
                <ul>
                    <li><a href="#basic_shortcuts">Basic Shortcuts</a></li>
                    <li><a href="#browser_shortcuts">Browser Shortcuts</a></li>
                    <li><a href="#vsCode_shortcuts">VS Code Shortcuts</a></li>
                    <li><a href="#vsCode_tools">VS Code Tools & Extension</a></li>
                    <li><a href="#command_line">Command Line</a></li>
                    <li><a href="#git_commands">Git Commands</a></li>
                    <li><a href="#data_types">Data Types</a></li>
                    <li><a href="#operators">Operators</a></li>
                    <li><a href="#variables">Variables</a></li>
                    <li><a href="#functions">Functions</a></li>
                    <li><a href="#loops">Loops</a></li>
                    <li><a href="#control_statements">Control Statements</a></li>
                    <li><a href="#scope">Scope & Closures</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}
