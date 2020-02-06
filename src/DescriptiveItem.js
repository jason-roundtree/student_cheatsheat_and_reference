import React from 'react'

export default function DescriptiveItem(props) {
    return (
        <div>
            {props.section.data.map(secData => {
                return (
                    <div 
                        className="description_container"
                        key={secData.name}
                    >
                        <h4>{secData.name}</h4>

                        <p>{secData.description}</p>

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
            })}
        </div>
    )
}
