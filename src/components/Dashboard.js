import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import DocumentRow from './DocumentRow';
import history from '../history'

let Document = (props) => (
    <DocumentRow document={props.document} />
);

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.init();
    }

    async init(){
        await this.loadData();
    }

    loadData = async () => {
        let allDocuments = []
        let documentComponents = [], documentDetails = []

        for (let i = 0; i < 5; i++) {
            documentDetails[i]=[]
            let document = allDocuments[i]
            documentDetails[i].name = "name " +i//document[0];
            documentDetails[i].description = "description " +i// document[1]
            documentDetails[i].sender = "exemple@mail.com " +i
            documentDetails[i].type = "type "+i
            documentDetails[i].statut = "signed"//document[2]

            documentComponents[i] = (
                <Document
                    key={i}
                    document={documentDetails[i]}
                />
            );
            console.log("name : " + documentDetails[i].name)
        }
        this.setState({ data: documentComponents })
    }

    render() {
        return (
            <div className="container">

                <div style={{ float: "right", marginBottom: "10px" }}>
                    <Router history={history}>
                        <Link to="/Depot">
                            <img
                                style={{ width: "25px", cursor: "pointer" }}
                                src="https://img.icons8.com/color/48/000000/plus-math.png"
                                alt="Add Project"
                            />
                        </Link>
                    </Router>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: "20%", textAlign: "left" }}>Nom du document</th>
                            <th style={{ width: "30%", textAlign: "left" }}>Description du document</th>
                            <th style={{ width: "30%", textAlign: "left" }}>Proprietaire</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Type du document</th>
                            <th style={{ width: "10%", textAlign: "left" }}>Statut</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data}
                    </tbody>
        
                </table>
            </div>
        )
    }
}

export default Dashboard