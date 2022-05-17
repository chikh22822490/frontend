import '../styles/Banner.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from '../history';
import Logo from '../assets/tenstep-logo-blanc.png'

function Banner() {
	return (
		<div className='banner'>
			<div>
				<Router history={history}>
					<Link to="/Dashboard" id='logo-link'>
						<img src={Logo} alt="TenStep" className="banner-logo" />
					</Link>
				</Router>

			</div>

			{/* <form className="d-flex">
				<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success" type="submit">Search</button>
			</form> */}

			{/* <div id='current-account'>
				<button className='btn btn-outline-primary' onClick={() => alert("Your current ETH account: " + props.account)}>account</button>
			</div> */}
		</div>
	)
}


export default Banner