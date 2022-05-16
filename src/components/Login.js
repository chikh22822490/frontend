import React, {Component, useState} from 'react'
import { Link  ,  Router} from 'react-router-dom'; 
import Logo from '../assets/tenstep-logo.png'
import history from '../history';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            password: '',
            connected: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    componentDidMount(){
        this.setState({name: '', password: '', connected: false})
    }

    onChangeUsername(e){
       this.setState({name: e.target.value,});
    }

    onChangePassword(e){
       this.setState({password: e.target.value,});
       console.log("password : " + this.state.password)
    }

    onSubmit(e){
        e.preventDefault();
        console.log("username : " + this.state.name)
        console.log("password : " + this.state.password)
        // await fetch('http://localhost:8080/clients/addClient', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({name, email})
        // }).then(function(response) {
        //     if (response.status === 200) {
        //         return response.json();
        //     }
        // }).then(response => {
        //     console.log(response);
        // })
        console.log("false : " + this.state.connected)
        if(this.state.name==="faycel"&&this.state.password==="faycel"){
            this.setState({connected: true})
            window.location = "/Dashboard";
        }
    }

    render(){
        return (
            <div className='container' style={{ display: "flex", justifyContent: "center" }}>
                <div className="card" style={{ width: "35%", padding: "5%" }}>
                    <img src={Logo} alt="logo" />
                    <form onSubmit={(e)=>{ this.onSubmit(e)}}>
                        <div className="mb-3">
                            <label className="form-label" style={{ fontSize: "1.5rem" }}>Username</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e)=>this.onChangeUsername(e)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ fontSize: "1.5rem" }}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>this.onChangePassword(e)}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                            <label className="form-check-label">Remember me</label>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="submit" className="btn btn-primary" >Connexion</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login