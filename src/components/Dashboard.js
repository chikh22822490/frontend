import React, { Component } from 'react'
import DashboardUser from './DashboardUser'
import DashboardAdmin from './DashboardAdmin';

class Dashboard extends Component {
    constructor() {
        super();
        const userLocal = JSON.parse(localStorage.getItem("user"));
        this.state = {
            data: [],
            loading: false,
            isAdmin: userLocal.isAdmin,
            userId: userLocal.userId
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.isAdmin ? (
                    <DashboardAdmin />
                ) : (<div>
                    <DashboardUser userId={this.state.userId}/>
                </div>)}
            </div>
        )
    }
}

export default Dashboard