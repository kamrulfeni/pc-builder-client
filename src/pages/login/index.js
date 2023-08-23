import RootLayout from '@/components/Layouts/RootLayout';
import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import auth from '@/firebase/firebase.auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Navbar from '@/components/Layouts/Navbar';

const Login = () => {
    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth);

    const {
        register, reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)

        reset()
    }



    return (
        <div className='flex items-center justify-center w-full'>
            <div className='p-4 md:p-10 shadow-lg rounded-lg bg-[#0F172A] text-white'>
                <div>
                    <h1 className='text-center'>Login here</h1>
                    <div className='bg-slate-50 w-full p-[1px] rounded my-5'></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='my-2 w-40 md:w-60'>
                        <label className='text-lg font-bold' htmlFor="email">Email</label><br />
                        <input className='p-2 outline-none border-none rounded-md w-full' type='Email' id='email' {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Enter a valid email'
                            }
                        })} />
                    </div>

                    <div className='my-2 w-40 md:w-60'>
                        <label className='text-lg font-bold' htmlFor="password">Password</label><br />
                        <input className='p-2 outline-none border-none rounded-md w-full' type='password' {...register("password", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}

                    </div>


                    <input className='my-2 w-full py-2 rounded-md text-md font-bold cursor-pointer' type="submit" />
                </form>
                <div>
                    <div className='bg-slate-50 w-full p-[1px] rounded my-5'></div>
                    <h3 className='text-center'>Login with github</h3>
                    <div className='text-4xl text-center'>
                        <GithubOutlined onClick={() => signIn("github", {
                            callbackUrl: "http://localhost:3000/pc-builder"
                        })} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


Login.getLayout = function getLayout(page) {
    return (
        (
            <>
                <RootLayout >
                    {page}
                </RootLayout>
                <Navbar>
                    {page}
                </Navbar>
            </>
        )
    )
}