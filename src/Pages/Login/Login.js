import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Header from '../Shared/Header/Header';

const Login = () => {
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const { signIn , providerSignIn} = useContext(AuthContext);
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
            .catch(error => setError(error.message))

    }


    const googleSignin = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);

            })
            .catch(error => console.error(error))
    }
    const githubSignIn = () => {
        providerSignIn(gitHubProvider)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);

            })
            .catch(error => console.error(error))
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
                            <div>
                                <p className='text-center'>Login with</p>
                                <div className="flex align-middle justify-center gap-6 text-5xl mt-3 ">
                                    <FaGoogle className='rounded-xl hover:bg-slate-400 p-1' onClick={googleSignin}></FaGoogle>
                                    <FaGithub className='rounded-xl hover:bg-slate-400 p-1' onClick={githubSignIn}></FaGithub>
                                </div>
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