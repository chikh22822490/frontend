import React, { useState } from 'react'
import { Button, Modal } from 'rimble-ui'

function UpdateUser(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [nom, setNom] = useState(props.user[1])
    const [prenom, setPrenom] = useState(props.user[2])
    const [email, setEmail] = useState(props.user[3])
    const [image, setImage] = useState(props.user[4])

    const onChangeNom = (e) => {
        setNom(e.target.value)
    }

    const onChangePrenom = (e) => {
        setPrenom(e.tager.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeImage = (e) => {
        setImage(e.target.value)
    }

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };


    const closeModal = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    const onSubmit = async (e) => {
        const userDetails = {
            username: nom,
            prenom: prenom,
            email: email,
            image: image
        };

        // post fetch hne

        alert("Modifié " + userDetails[1])
    }

    return (
        <div className='btn-group-vertical' id='voteButtons'>
            <button className='btn btn-warning' id='upVoteBtn' onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
            </button>
            <Modal isOpen={isOpen}>


                <div className="container card">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h5 style={{ marginTop: "6%" }}>Modifier l'utilisateur</h5>
                        {/* Close icon to close the modal */}
                        <Button.Text
                            icononly
                            icon={"Close"}
                            color={"moon-gray"}
                            position={"absolute"}
                            top={0}
                            right={0}
                            mt={3}
                            mr={3}
                            onClick={closeModal}
                        />
                    </div>

                    {/* New user Form */}
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Nom</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Nom de l'utilisateur"
                                defaultValue={props.user[1]}
                                onChange={onChangeNom}
                            />
                        </div>

                        <div className="form-group">
                            <label>Prenom</label>
                            <textarea
                                type="text"
                                required
                                className="form-control"
                                placeholder="Prenom de l'utilisateur"
                                defaultValue={props.user[2]}
                                onChange={onChangePrenom}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input
                                type="email"
                                required
                                className="form-control"
                                placeholder="Email de l'utilisateur"
                                defaultValue={props.user[3]}
                                onChange={onChangeEmail}
                            />
                        </div>

                        <div className="form-group">
                            <label>Image de l'utilisateur</label>
                            <input
                                type="url"
                                required
                                className="form-control"
                                placeholder="URL de l'image de l'utilisateur"
                                defaultValue={props.user[4]}
                                onChange={onChangeImage}
                            />
                        </div>

                        <br />

                        <div style={{display:"flex", justifyContent: "center"}}>
                            <button
                                className="btn btn-success grid-item"
                                style={{ width: 100 }}
                                type="submit"
                            >
                                Modifier
                            </button>
                        </div>

                        <br />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default UpdateUser