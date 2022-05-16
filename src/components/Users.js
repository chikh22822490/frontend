import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import UserRow from './UserRow';
import history from '../history'

let User = (props) => (
    <UserRow user={props.user} />
);

class Users extends Component {
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
        let allUsers = []
        let userComponents = [], userDetails = []

        for (let i = 0; i < 5; i++) {
            userDetails[i]=[]
            let user = allUsers[i]
            userDetails[i].nom = "nom " +i//document[0];
            userDetails[i].prenom = "prenom " +i// document[1]
            userDetails[i].email = "exemple@mail.com " +i

            userComponents[i] = (
                <User
                    key={i}
                    user={userDetails[i]}
                />
            );
        }
        this.setState({ data: userComponents })
    }

    render() {
        return (
            <div className="container">

                <div style={{ float: "right", marginBottom: "10px" }}>
                    <Router history={history}>
                        <Link to="/AddUser">
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
                            <th style={{ width: "10%", textAlign: "left" }}>User image</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Nom</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Prenom</th>
                            <th style={{ width: "30%", textAlign: "left" }}>E-mail</th>
                            <th style={{ width: "20%", textAlign: "left" }}>Actions</th>
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

export default Users