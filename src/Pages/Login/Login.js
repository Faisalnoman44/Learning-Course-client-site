import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Header from '../Shared/Header/Header';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                setError('')
                navigate(from, { replace: true })


            })
            .catch(error =>setError(error.message))

    }

    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-9/12">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="emnai" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New here? <Link className='text-blue-600' to='/register'>Register now</Link></p>
                        </Form>
                        <p className='text-center text-red-500 pb-3'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;