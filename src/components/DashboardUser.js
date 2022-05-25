import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Loader } from "rimble-ui";
import history from '../history';
import DocumentRowUser from './DocumenntRowUser';

let Document = (props) => (
    <DocumentRowUser document={props.document} />
);

class DashboardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            isAdmin: true
        }
    }

    loader = false;

    componentDidMount(){
        this.init();
        console.log("id : " +this.props.userId)
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
            documentDetails[i].description = "description description description description description " +i// document[1]
            documentDetails[i].type = "type "+i
            documentDetails[i].statut = "waiting"

            documentComponents[i] = (
                <Document
                    key={i}
                    document={documentDetails[i]}
                />
            );
        }
        this.setState({ data: documentComponents, loading: false })
    }

    render() {
        return (
            <div className="container">

                {this.state.isAdmin ? (
                <div>
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
                </div> 
                    ):(
                    <div></div>
                )}

                <table className="table table-hover">
                    <thead>
                        <tr style={{ width: "100%", height: "auto", textAlign: "center" }}>
                            <th colSpan={5}>Listes des documents de l'utilisateur</th>
                        </tr>
                        <tr>
                            <th style={{ width: "20%", textAlign: "left" }}>Titre</th>
                            <th style={{ width: "50%", textAlign: "left" }}>Description du document</th>
                            <th style={{ width: "10%", textAlign: "left" }}>Categorie</th>
                            <th style={{ width: "20%", textAlign: "center" }}>Statut</th>
                            <th style={{ width: "20%", textAlign: "center" }}>Téléchargement</th>
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

export default DashboardUser