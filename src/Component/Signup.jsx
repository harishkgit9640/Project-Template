import React, { useState } from 'react';
import SignupPic from '../Images/signup.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = (e) => {
	const location = useNavigate();
	const [user, setUser] = useState({
		fullName: "", email: "", password: "", c_password: "", work: "", mobile: "", address: "",
	});

	// get the data from form
	const HandleInput = (event) => {
		const { value, name } = event.target;
		setUser({ ...user, [name]: value })
	};

	// post data to server
	const getUserData = async (event) => {
		event.preventDefault();
		const { fullName, email, password, c_password, work, mobile, address, } = user;
		const res = await fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				fullName, email, password, c_password, work, mobile, address
			})
		});
		const data = await res.json();
		if (data.status === 422 || !data) {
			alert('something went wrong!');
			console.log('something went wrong!');
		}
		else {
			alert('Registration successful');
			console.log('Registration successful');
			location('/login');
		}
	};
	return (
		<>
			<div className="container col-10 signup_box mt-5">
				<div className="row px-5">
					<div className="col-lg-6 col-md-6 col-12">
						<img src={SignupPic} alt="signup images" />
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<form className=" py-3">
							<div className="mb-3">
								<h1 className="text-primary">Registration</h1>
								<p className='text-muted'> Already have an Account <NavLink to='/Login'> Login here  </NavLink></p>
							</div>
							<div className="row g-3">
								<form method='POST'>
									<div className="col-12">
										<label htmlFor="inputName" className="form-label">First Name</label>
										<input type="text" name="fullName" className="form-control" id="inputName" value={user.fullName} onChange={HandleInput} placeholder="Full Name" />
									</div>
								</form>

								<div className="col-12">
									<label htmlFor="inputEmail4" className="form-label">Email</label>
									<input type="email" name="email" className="form-control" id="inputEmail4" value={user.email} onChange={HandleInput} placeholder='pushpa@gmail.com' />
								</div>
								<div className="col-6">
									<label htmlFor="password" className="form-label">Password</label>
									<input type="password" name="password" className="form-control" id="password" value={user.password} onChange={HandleInput} placeholder='**********' autoComplete='off' />
								</div>
								<div className="col-6">
									<label htmlFor="c_password" className="form-label">Confirm Password</label>
									<input type="password" name="c_password" className="form-control" id="c_password" value={user.c_password} onChange={HandleInput} placeholder='**********' autoComplete='off' />
								</div>
								<div className="col-md-6 col-12">
									<label htmlFor="phone" className="form-label">Mobile Number</label>
									<input type="text" name="mobile" className="form-control" id="phone" value={user.mobile} onChange={HandleInput} placeholder='+91 6204209211' />
								</div>

								<div className="col-md-6 col-12">
									<label htmlFor="work" className="form-label">Work</label>
									<input type="text" name="work" className="form-control" id="work" value={user.work} onChange={HandleInput} placeholder='Web Developer, Graphics' />
								</div>

								<div className="col-12">
									<label htmlFor="add" className="form-label">Full Address</label>
									<input type="text" name="address" className="form-control" id="address" value={user.address} onChange={HandleInput} placeholder='Ameerpet, Hyderabad' />
								</div>

								<div className="col-12">
									<button type="submit" onClick={getUserData} name="submit" className="btn btn-primary px-3">Submit</button>
								</div>

							</div>
						</form>
					</div>

				</div>
			</div>
		</>
	)
}

export default Signup;
