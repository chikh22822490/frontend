import '../styles/Banner.css'
import React, { useState } from 'react';
import Logo from '../assets/tenstep-logo-blanc.png'
import { Dropdown } from 'react-bootstrap';


function Banner(props) {
	const user = JSON.parse(localStorage.getItem("user"));

	const onDisconnect = () => {
		localStorage.setItem("user", null);
		window.location = "/Login"
	}

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#343c7c", marginBottom: "1%" }}>
				<a className="navbar-brand" href="Dashboard">
					<img src={Logo} width="100%" height="30" className="d-inline-block align-top" alt="TenStep" />
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="/Dashboard" style={{ color: "#ffffff" }}>Dashboard</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/Users" style={{ color: "#ffffff" }}>Utilisateurs</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/Downloads" style={{ color: "#ffffff" }}>Téléchargements</a>
						</li>
					</ul>
				</div>

				<div style={{ float: "right", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
					<Dropdown>
						<Dropdown.Toggle id="dropdown-button-dark-example1" variant="info">
							Profile
						</Dropdown.Toggle>

						<Dropdown.Menu variant="dark">
							<img src={user.imageUser} alt="" style={{ marginRight: "2%" }} width="auto" height="50" className="d-inline-block align-text-center" />
							<span className='banner-title'>
								{user.username}
							</span>
							<Dropdown.Item href="#/action-1" active>
								Action
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item onClick={onDisconnect}>Deconnexion</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</nav>
		</div>
	)
}


export default Banner