import React, { Component , useState} from 'react'
import UploadService from '../services/documentsService'
import Banner from './NavBar';

function AddDocumentUtil() {

    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [descriprtion, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    }

    const onChangeDescription = (event) =>{
        setDescription(event.target.value);
    }

    const onChangeCategorie = (event) => {
        setCategorie(event.target.value);
    }

    const onSubmit = () =>{
        let currentFile = selectedFiles[0];

        UploadService.upload(currentFile, descriprtion, categorie).then((response)=>{
            console.log("response : " + response.data)
          })
        setSelectedFiles(undefined);
    }

    return (
        <div>
            <Banner />
            <div className='container' style={{ width: "40%" }}>
                <form onSubmit={onSubmit}>
                    
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Categorie</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Prenom de l'utilisateur" required onChange={onChangeCategorie}/>
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
                            onChange={onChangeDescription}
                            />
                        </div>
                    </div>
                    <fieldset className="row mb-3">
                        <div className="row mb-3">
                            <label className="col col-form-label">Séléctionner un fichier</label>
                            <div>
                                <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={selectFile}/>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddDocumentUtil