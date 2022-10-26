import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Header from '../Shared/Header/Header';
import { useState } from 'react';

const Register = () => {

    const [error, setError] = useState('')

    const { createUser, providerSignIn, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                handleUpdateProfile(name, photoURL);
                form.reset();
                navigate('/')
                console.log(user);
                

            })
            .catch(error => setError(error.message))
        console.log(name, photoURL)

    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {})
            .catch(error => console.error(error))

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

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-9/12">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </Form>
                        <p className='text-center text-red-500'>{error}</p>
                        <div>
                            <p className='text-center'>Register with</p>
                            <div className="flex align-middle justify-center gap-6 text-5xl mt-3 ">
                                <FaGoogle className='rounded-xl hover:bg-slate-400 p-1' onClick={googleSignin}></FaGoogle>
                                <FaGithub className='rounded-xl hover:bg-slate-400 p-1' onClick={githubSignIn}></FaGithub>
                            </div>
                        </div>
                        <p className='py-2 text-center'>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;