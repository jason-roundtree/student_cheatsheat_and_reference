import React from 'react'

export default function ShortcutTable(props) {
    return (
        <div className="table_container">
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
                                <th>{secData.name}</th>
                                <td><kbd>{secData.mac}</kbd></td>
                                <td><kbd>{secData.windows}</kbd></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
