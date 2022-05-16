import React from 'react'
import '../styles/UserRow.css'

function UserRow(props) {
    
    const id = props.user.id
    const nom = props.user.nom
    const prenom = props.user.prenom
    const email = props.user.email
    const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"

    const Supprimer = async () => {
        //fetch function here
        console.log("supprimé")
        alert("Supprimé")

        window.location = "/Users";
    };

    return (
        <tr>
            <td>
                <img id='logo' src={image} alt='user image' />
            </td>
            <td>
                <h6 id='candidateTitle'>{nom}</h6>
            </td>
            <td>
                <font className="text-muted" size="3">
                    <b>{prenom}</b><br />
                </font>
            </td>
            <td>
                <h6 id='candidateTitle'>{email}</h6>
            </td>
            <td>
                <div className='btn-group-vertical' id='voteButtons'>
                    <button className='btn btn-success' id='upVoteBtn'>Modifier</button>
                    <button className='btn btn-warning' id='downVoteBtn' onClick={() => Supprimer()}>Supprimer</button>
                </div>
            </td>
        </tr>
    )
}

export default UserRow