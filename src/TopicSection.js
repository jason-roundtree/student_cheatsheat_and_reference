import React from 'react'

export default function TopicSection(props) {
    return (
        <section id={props.section.id}>
            <h3>{props.section.name}</h3>
            {props.section.type === 'shortcut_table' 
                ? (
                    <table>
                        <tbody>
                            <tr>
                                <th>Shortcut</th>
                                <th>Mac</th>
                                <th>Windows</th>
                            </tr>
                            
                            {props.section.data.map(secData => {
                                return (
                                    <tr key={secData.name}>
                                        <td>{secData.name}</td>
                                        <td><kbd>{secData.mac}</kbd></td>
                                        <td><kbd>{secData.windows}</kbd></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )

                : (
                    <span>Content Coming Soon</span>
                )
            }
            </section>             
    )
}
