import React, { Component } from "react";
import App from "./App";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // These state variables would maintain inputs of the form
    this.state = {
      username: "",
      prenom: "",
      email: "",
      image: ""
    };
  }

  // To store App.js instance
  app = null;

  // Connect application with Metamask and create smart-contract's instance
  async init() {
    this.app = new App();
    await this.app.init();
  }

  componentDidMount() {
    this.init();
  }

  onChangeNom(e) {
    this.setState({
      username: e.target.value,
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

  onChangeImage(e) {
    this.setState({
      image: e.target.value,
    });
  }


  async onSubmit(e) {
    e.preventDefault();

    const userDetails = {
      username: this.state.username,
      prenom: this.state.prenom,
      email: this.state.email,
      image: this.state.image
    };

    // fetch fonction goes here
    
    alert("Ajouté");
    window.location = "/Users";
  }

  render() {
    return (
      <div className="container card">
        <h3>Create New user</h3>

        {/* New user Form */}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="Nom de l'utilisateur"
              onChange={this.onChangeNom}
            />
          </div>

          <div className="form-group">
            <label>Prenom</label>
            <textarea
              type="text"
              required
              className="form-control"
              placeholder="Prenom de l'utilisateur"
              onChange={this.onChangePrenom}
            ></textarea>
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              required
              className="form-control"
              placeholder="Email de l'utilisateur"
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Image de l'utilisateur</label>
            <input
              type="url"
              required
              className="form-control"
              placeholder="URL de l'image de l'utilisateur"
              value="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
              onChange={this.onChangeImage}
            />
          </div>

          <br />

          <div>
            <button
              className="btn btn-success grid-item"
              style={{ width: 100 }}
              type="submit"
            >
              Submit
            </button>
          </div>

          <br />
        </form>
      </div>
    );
  }
}

export default AddUser;