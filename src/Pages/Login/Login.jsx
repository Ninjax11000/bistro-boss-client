import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn, logOut}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from= location.state?.from?.pathname || '/';
    
    const [disabled, setDisabled]=useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleCaptcha = (e)=>{
        e.preventDefault();
        const value= e.target.value;
        console.log(value);
        if(validateCaptcha(value)){
            setDisabled(false);
        }
        else{
             setDisabled(true);
        }
        
    }

    const handleLogin = event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(error=> console.log(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleCaptcha} name='captcha'  placeholder="type the text above" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p>New here? <Link to='/signup'>Create Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;