import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Loader } from "rimble-ui";
import DocumentRow from './DocumentRow';
import history from '../history'

let Document = (props) => (
    <DocumentRow document={props.document} />
);

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
        }
    }

    loader = false;

    componentDidMount(){
        this.init();
    }

    async init(){
        await this.loadData();
    }

    loadData = async () => {
        this.setState({ loading: true });

        let allDocuments = []
        let documentComponents = [], documentDetails = []

        for (let i = 0; i < 5; i++) {
            documentDetails[i]=[]
            let document = allDocuments[i]
            documentDetails[i].name = "name " +i//document[0];
            documentDetails[i].description = "description " +i// document[1]
            documentDetails[i].sender = "exemple@mail.com " +i
            documentDetails[i].type = "type "+i
            documentDetails[i].statut = "En attente"//document[2]

            documentComponents[i] = (
                <Document
                    key={i}
                    document={documentDetails[i]}
                />
            );
            console.log("name : " + documentDetails[i].name)
        }
        this.setState({ data: documentComponents, loading: false })
    }

    render() {
        return (
            <div className="container">

                <div style={{ float: "right", marginBottom: "10px" }}>
                    <img
                        style={{ width: "25px", marginRight: "20px", cursor: "pointer" }}
                        onClick={this.loadData}
                        src="https://img.icons8.com/color/50/000000/synchronize.png"
                        alt="refresh projects"
                    />
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
                        <tr style={{ width: "100%", height: "auto", textAlign: "center" }}>
                            <th colSpan={6}>Listes des documents</th>
                        </tr>
                        <tr>
                            <th style={{ width: "15%", textAlign: "left" }}>Titre</th>
                            <th style={{ width: "45%", textAlign: "left" }}>Description du document</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Proprietaire</th>
                            <th style={{ width: "10%", textAlign: "center" }}>Categorie</th>
                            <th style={{ width: "5%", textAlign: "center" }}>Statut</th>
                            <th style={{ width: "5%", textAlign: "center" }}>Editer</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data}
                    </tbody>
        
                </table>
                <center>{this.state.loading ? <Loader size="40px" /> : <></>}</center>
            </div>
        )
    }
}

export default Dashboard