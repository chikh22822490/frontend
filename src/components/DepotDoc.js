import React from 'react'

function DepotDoc() {
    return (
        <div className='container' style={{ width: "40%" }}>
            <form>
                <div className="row mb-3">
                    <label for="nom" className="col-sm-2 col-form-label">Nom</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="nom" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="prenom" className="col-sm-2 col-form-label">Prenom</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="prenom" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" />
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <label className="col-form-label col-sm-2 pt-0">Radios</label>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" for="gridRadios2">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            <label className="form-check-label" for="gridRadios3">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="row mb-3">
                    <div className="row mb-3">
                        <label for="file" className="col col-form-label">Selectionner un fichier</label>
                        <div>
                            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
    )
}

export default DepotDoc