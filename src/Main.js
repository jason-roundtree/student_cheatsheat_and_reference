import React from 'react'
import TopicSection from './TopicSection'
import data from './data'

export default function Main() {
    return (
        <main>
            {data.map(section => {
                return (
                    <TopicSection 
                        section={section}
                        key={section.id}
                    />
                )
            })}
        </main>
    )
}
