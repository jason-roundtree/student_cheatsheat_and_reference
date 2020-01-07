import React from 'react'

export default function ShortcutTable(props) {
    return (
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
}
