import React, {Component} from 'react'
import Logo from '../assets/tenstep-logo.png'

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
            <div className='container' style={{ display: "flex", justifyContent: "center", position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="card" style={{ width: "40%", padding: "5%" }}>
                    <img src={Logo} alt="logo" />
                    <form onSubmit={(e)=>{ this.onSubmit(e)}} style={{marginTop:"10%"}}>
                        <div className="mb-3">
                            <label className="form-label" style={{ fontSize: "1.5rem" }}>Email</label>
                            <input type="text" className="form-control" placeholder='Votre adress mail' required onChange={(e)=>this.onChangeUsername(e)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ fontSize: "1.5rem" }}>Mot de passe</label>
                            <input type="password" className="form-control" placeholder='Votre mot de passe' onChange={(e)=>this.onChangePassword(e)}/>
                        </div>
                        <div className="mb-3" style={{ display: "flex", justifyContent: "center", marginTop:"10%" }}>
                            <button type="submit" className="btn btn-lg btn-primary" >Connexion</button>
                        </div>
                        <div className="mb-3">
                            <span style={{ fontSize: "1.5rem" }}>Vous n'avez pas de compte? <a href='/AddUser'>S'inscrire ici</a></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login