import React, { Component } from "react";
import Logo from '../assets/tenstep-logo.png'


class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // These state variables would maintain inputs of the form
    this.state = {
      name: "",
      prenom: "",
      email: "",
      password: "",
      image: ""
    };
  }

  confirmPassword = ""

  componentDidMount() {
  }

  onChangeNom(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }


  async onSubmit(e) {
    e.preventDefault();
    let valide = false
    if (this.state.password === this.confirmPassword) {
      valide = true
    }
    if (valide === true) {
      const userDetails = {
        name: this.state.name,
        prenom: this.state.prenom,
        email: this.state.email,
        password: this.state.password,
        image: this.state.image
      };

      // fetch fonction goes here

      alert("Ajouté");
      window.location = "/Login";
    }
    else alert("Informations invalides")
  }

  render() {
    return (
      <div className="container" style={{ display: "flex", justifyContent: "center"}}>
        <div className="card" style={{ width: "40%", paddingLeft:"5%", paddingRight:"5%", paddingTop:"5%", paddingBottom:"0%" }}>
          <img src={Logo} alt="logo" />

          {/* New user Form */}
          <form onSubmit={this.onSubmit} style={{ marginTop: "10%" }}>
            <div className="mb-3">
              <label style={{ fontSize: "1.5rem" }}>Nom</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Nom de l'utilisateur"
                onChange={this.onChangeNom}
              />
            </div>

            <div className="mb-3">
              <label style={{ fontSize: "1.5rem" }}>Prénom</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Prenom de l'utilisateur"
                onChange={this.onChangePrenom}
              ></input>
            </div>

            <div className="mb-3">
              <label style={{ fontSize: "1.5rem" }}>E-mail</label>
              <input
                type="email"
                required
                className="form-control"
                placeholder="Email de l'utilisateur"
                onChange={this.onChangeEmail}
              />
            </div>

            <div className="mb-3">
              <label style={{ fontSize: "1.5rem" }}>Password</label>
              <input
                type="password"
                required
                className="form-control"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </div>

            <div className="mb-3">
              <label style={{ fontSize: "1.5rem" }}>Confirm password</label>
              <input
                type="password"
                required
                className="form-control"
                placeholder="Confirm password"
                onChange={(e) => { this.confirmPassword = e.target.value }}
              />
            </div>

            <div className="mb-3">
              <label style={{ fontSize: "1.5rem" }}>Image de l'utilisateur</label>
              <input
                type="url"
                required
                className="form-control"
                placeholder="URL de l'image de l'utilisateur"
                defaultValue="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                onChange={this.onChangeImage}
              />
            </div>

            <div className="mb-3" style={{ display: "flex", justifyContent: "center" }}>
              <div className="mb-3" style={{ display: "flex", justifyContent: "center"}}>
                <button type="submit" className="btn btn-lg btn-success" >S'inscrire</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser;