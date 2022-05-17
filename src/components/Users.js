import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Loader } from "rimble-ui";
import UserRow from './UserRow';
import history from '../history'

let User = (props) => (
    <UserRow user={props.user} />
);

class Users extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: false,
        }
    }

    loader = false;

    componentDidMount() {
        this.init();
    }

    async init() {
        await this.loadData();
    }

    loadData = async () => {
        this.setState({ loading: true });

        let allUsers = []
        let userComponents = [], userDetails = []

        for (let i = 0; i < 5; i++) {
            userDetails[i] = []
            let user = allUsers[i]
            userDetails[i].nom = "nom " + i//document[0];
            userDetails[i].prenom = "prenom " + i// document[1]
            userDetails[i].email = "exemple@mail.com " + i

            userComponents[i] = (
                <User
                    key={i}
                    user={userDetails[i]}
                />
            );
        }
        this.setState({ data: userComponents, loading: false, })
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
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: "10%", textAlign: "left" }}>User image</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Nom</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Prenom</th>
                            <th style={{ width: "30%", textAlign: "left" }}>E-mail</th>
                            <th style={{ width: "20%", textAlign: "center" }}>Actions</th>
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

export default Users