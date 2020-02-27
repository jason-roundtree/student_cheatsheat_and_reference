import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

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
                                <Link 
                                    to={`#${section.id}`}
                                    className={incompleteSection 
                                        ? 'incomplete_section' 
                                        : ''
                                    }
                                >
                                    {section.name}
                                    
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
