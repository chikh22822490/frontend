import React, { Component } from 'react'

function DocumentRow(props) {

    const statut = props.document.statut

    return (
        <tr>
            <td>
                <h6 id='candidateTitle'>{props.document.name}</h6>
            </td>
            <td>
                <font className="text-muted" size="3">
                    <b>{props.document.description}</b><br />
                </font>
            </td>
            <td>
                <h6 id='candidateTitle'>{props.document.sender}</h6>
            </td>
            <td>
                <h6 id='candidateTitle'>{props.document.type}</h6>
            </td>
            <td style={{color:"white"}}>
                {statut === "signed" ? (
                <div>
                    <font className="text badge bg-success" size="10">
                    <h6>{props.document.statut}</h6>
                </font>
                </div>
                ) : (
                    <div>
                        {statut === "refused" ? (
                        <div>
                            <font className="text badge bg-danger" size="10">
                                <h6>{props.document.statut}</h6>
                            </font>
                        </div>
                        ) : (
                        <div>
                            <font className="text badge bg-info" size="10">
                                <h6>{props.document.statut}</h6>
                            </font>
                        </div>)}
                    </div>)}
            </td>
        </tr>
    )
}

export default DocumentRow