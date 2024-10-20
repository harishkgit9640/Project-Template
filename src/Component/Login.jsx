import React, { useState } from 'react'
import Login_pic from '../Images/signup.svg';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        email: "", password: ""
    });
    const inputElement = (event) => {
        const { value, name } = event.target;
        setData({ ...data, [name]: value });
    };

    const submitForm = (event) => {
        event.preventDefault();
        alert('login successfully');
    }

    return (
        <>
            <div className="container col-10 login_box mt-2">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <form className='mt-5 ps-5'>
                            <div className="mb-5">
                                <h1 className="text-primary">LogIn</h1>
                                <p className='text-muted'> Don't have an Account <NavLink to='/Signup'> Signup Now </NavLink></p>
                            </div>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="inputEmail4" value={data.email} onChange={inputElement} placeholder='pushpa@gmail.com' />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" id="password" value={data.password} onChange={inputElement} placeholder='**********' />
                                </div>

                                <div className="col-12">
                                    <button type="submit" onClick={submitForm} name="submit" className="btn btn-primary px-3">Login</button>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 col-12">
                        <img src={Login_pic} alt="login images" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;

