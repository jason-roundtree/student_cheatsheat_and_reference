import React from 'react'
import ShortcutTable from './ShortcutTable'

export default function TopicSection(props) {
    return (
        <section id={props.section.id}>
            <h3>{props.section.name}</h3>
            {props.section.type === 'shortcut_table' 
                ? (
                    <ShortcutTable 
                        section={props.section}
                    />
                )

                : (
                    <span>Content Coming Soon</span>
                )
            }
            </section>             
    )
}
