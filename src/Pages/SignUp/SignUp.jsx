import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const {createUser}=useContext(AuthContext);
    const navigate= useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            navigate('/', {replace: true});
        })
    }

   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name",  { required: true })} name='name' placeholder="Your name" className="input input-bordered" />
                            {errors.name && <span>This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true, 
                                minLength:6,
                                maxLength: 20,
                                pattern: /(?=.*[0-9].*[0-9])/
                                 
                                 })} name='password' placeholder="password" className="input input-bordered"  />
                            {errors.password?.type==='required' && <span>This field is required</span>}
                            {errors.password?.type==='minLength' && <span>password must be 6 digit long</span>}
                            {errors.password?.type==='maxLength' && <span>password should be under 20 characters</span>}
                            {errors.password?.type==='pattern' && <span>password should contain 2 digits</span>}
                        

                        </div>

                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Register" />
                        </div>
                    </form>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;