import React from 'react'

export default function TableOfContents(props) {
    return (
        <div>
            <h2>Table of Contents</h2>
            <nav>
                <ul>
                    {props.data.map(section => {
                        const incompleteSection = section.type === ''
                        return (
                            <li key={section.id}>
                                <a 
                                    href={`#${section.id}`}
                                    className={incompleteSection ? 'incomplete_section' : ''}
                                >
                                    {section.name}
                                    
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
