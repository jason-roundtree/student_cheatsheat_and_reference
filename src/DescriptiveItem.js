import React, { useEffect } from 'react'
import Prism from 'prismjs'

export default function DescriptiveItem(props) {
    // useEffect(() => {
    //     Prism.highlightAll()
    // })
    
    return (
        <div>
            {props.section.data && (
                props.section.data.map(secData => {
                    // console.log('secData: ', secData)
                    return (
                        <div 
                            className="description_container"
                            key={secData.name}
                        >
                            <h4>{secData.name}</h4>

                            {secData.description !== "" && (
                                <p>{secData.description}</p>
                            )}

                            {secData.code && (
                                <pre>
                                    <code className="language-js">
                                        {secData.code}
                                    </code>
                                </pre>      
                            )}

                            {secData.external_links && (
                                <ul>
                                    {secData.external_links.map((link, i) => (
                                        <li key={i}>
                                            <a 
                                                href={link.href} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.linkDescription}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )
                })
            )}
        </div>
    )
}
