import React, { Component, useState } from "react"
import "../styles/Login.css"
import logo from "../assets/tenstep-logo.png"

class Login extends Component {
    constructor() {
        super();
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // These state variables would maintain inputs of the form
        this.state = {
          name: null,
          email: null
        };
      }

      componentDidMount() {
        this.init();
      }

      init(){
        this.setState({name: "", email: ""})
      }


    onChangeUsername(e){
        this.setState({name: e.target.value});
    }

    onChangePassword(e){
       this.setState({email: e.target.value});
    }

    async onSubmit(e){
        e.preventDefault();
        console.log("ne5dem jawi behy");
        console.log("data : \n" + JSON.stringify(this.state))
        await fetch('http://localhost:8080/clients/addClient', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(function(response) {
            if (response.status === 200) {
                return response.json();
            }
        }).then(response => {
            console.debug(response);
          })
        }

    render(){
        return (
            <div className="box">
                <img src={logo} alt="logo" className="image"/>
                <h2>Connexion</h2>
                <form onSubmit={this.onSubmit}>
    
                    <div className="input-box">
                        <input type="text" name="username" autoComplete="off" onChange={this.onChangeUsername} required />
                        <label>Pseudo</label>
                    </div>
    
                    <div className="input-box">
                        <input type="password" name="password" autoComplete="off" onChange={this.onChangePassword} required />
                        <label >Mot de passe</label>
                    </div>
    
                    <div className="check-box">
                        <input type="checkbox" name="rememberme" />
                        <label >Se souvenir de moi</label>
                    </div>
    
                    <p className="forgot"><a href="#">Mot de passe oublié?</a></p>
    
                    <input type="submit" value="Se connecter" />
    
                    <p className="inscrit" align="center"><a href="register.jsp">Créer un compte</a></p>
    
                </form>
            </div>
        )
    }
}

export default Login