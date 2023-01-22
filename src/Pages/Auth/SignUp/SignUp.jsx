import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { supabase } from '../../../config/supabaseClient'


const SignUp = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [username, setUsername] = useState("")
    const [checked, setChecked] = useState(false)
    const [uid, setUid] = useState("")

    const [toggle, setToggle] = useState(false)

    const home = () => {
        navigate('/')
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const login = () => {
        navigate('/login')
    }
    const signup = () => {
        navigate('/signup')
    }

    const handleSignup = async (e) => {
        e.preventDefault()

        if (!checked) {
            alert("check the terms and servcies")
            return
        }

        if (password == "" || confirmPassword == "" || email == "" || username == "")

            if (password != confirmPassword) {
                alert("password does not match")
                return
            }

        try {
            const { error, data } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    emailRedirectTo: 'https://game-account.vercel.app/login'
                }
            })

            console.log(data)

            if (!error) {
                handleInsert()
            }

            if (error) {
                throw error
            }

            // console.log(data)
        } catch (error) {
            console.log(error)
        }

        // login()
    }

    const handleInsert = async () => {
        try {
            const { data, error } = await supabase
                .from("user_info")
                .insert({ username: username, email: email })
                .select()
                .single()

            console.log(data)

            if (error) {
                throw error
            }
            alert("Check your email for the login link")
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='login__container'>
            <div className="login__container__toggle" onClick={handleToggle}>
                <FiMenu className="navbar__container__mobile__icon" />
            </div>
            <div className="login__container__left">

                <div className="login__container__left__form">

                    <h1>SIGN UP</h1>

                    <form onSubmit={handleSignup}>
                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setUsername(e.target.value)} className='border-b-2 border-white' type="text" /> <br />
                        <label htmlFor="email">Email address</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border-b-2 border-white' type="email" /> <br />
                        <label htmlFor="Password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className='border-b-2 border-white' type="password" /><br />
                        <label htmlFor="Password">Confirm Password</label>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} className='border-b-2 border-white' type="password" />

                        <div className="login__container__left__form__checkbox">
                            <input onChange={(e) => setChecked(e.target.checked)} type="checkbox" />
                            <span>I agree with the</span> Terms and Policy
                        </div>
                        <button className='cursor-pointer' type='submit'>Continue</button>
                    </form>

                    <div className="login__container__left__form__signup">
                        <div style={{ cursor: "pointer" }}>
                            Google Sign Up
                        </div>

                        <p onClick={login}>Already have an account? <span style={{ cursor: "pointer" }}>Sign In</span></p>
                    </div>

                </div>
            </div>
            <div className="login__container__right">
                <div className='login__container__right__nav'>
                    <p className='text-lg' style={{ cursor: "pointer" }} onClick={home}>Home</p>
                    <p className='text-lg' style={{ cursor: "pointer" }}>Games</p>
                    <p className='text-lg' style={{ cursor: "pointer" }}>Contact us</p>
                </div>
            </div>

            {toggle && (
                <div
                    className="navbar__container__mobile__link">
                    <div className="navbar__container___mobile__link__close" onClick={handleToggle}>
                        x
                    </div>
                    <li style={{ cursor: "pointer" }} onClick={home}>Home</li>
                    <li style={{ cursor: "pointer" }}>Games</li>
                    <li style={{ cursor: "pointer" }}>Plans</li>
                    <li style={{ cursor: "pointer" }}>Contact</li>
                    <button style={{ cursor: "pointer" }} onClick={login} className="navbar__container__mobile__link__button__login">Sign In</button>
                    <button style={{ cursor: "pointer" }} onClick={signup} className="navbar__container__mobile__link__button__signup">Sign Up</button>
                </div>
            )}
        </div>

    )
}

export default SignUp