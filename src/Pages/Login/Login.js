import React from 'react';
import { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Header from '../Shared/Header/Header';

const Login = () => {

    const { signIn } = useContext(AuthContext);

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

            })
            .catch(error => console.error(error))

    }

    return (
        <div className=''>
            <Header></Header>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;