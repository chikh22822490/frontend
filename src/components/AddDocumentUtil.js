import React from 'react'

function AddDocumentUtil() {

    // const [nom, setNom]

    return (
        <div className='container' style={{ width: "40%" }}>
            <form>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Nom</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Nom du document" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea
                        type="text"
                        required
                        maxLength={250}
                        className="form-control"
                        placeholder="Description du document (max 250 caractères)"
                        // onChange={onChangeDescription}
                        />
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <label className="col-form-label col-sm-2 pt-0">Radios</label>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                            <label className="form-check-label">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" >
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                            <label className="form-check-label">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <div className="row mb-3">
                        <label className="col col-form-label">Séléctionner un fichier</label>
                        <div>
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
    )
}

export default AddDocumentUtil