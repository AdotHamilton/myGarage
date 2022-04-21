import React, { useState } from 'react'
import axios from 'axios';
import "./loginReg.css";
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { setViewName } from '../redux/appSlice';
import StateDropdown from '../components/StateDropdown';
import { CircularProgress } from '@mui/material';
import { navigate } from '@reach/router';
const Register = ({ path }) => {
    const dispatch = useDispatch();
    const initialState = {
        displayName:"",
        email:"",
        password:"",
        confirmPw:"",
        isBusiness: false,
        zipCode: "",
        state: "",
    }
    const [reg, setReg] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [ loading, setLoading ] = useState(false);
    const handleInputChange = (e) => {
        if(e.target.name == "isBusiness"){
            setReg({
                ...reg,
                isBusiness: !reg.isBusiness
            })
        } else {
            setReg({
                ...reg,
                [e.target.name]:e.target.value
            })    
        }
        
        if(e.target.name === "email"){
            let emailExp = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g);
            if(emailExp.test(e.target.value)){
                setErrors({
                    ...errors,
                    email: ""
                })
            }
        }
        if(e.target.name === "password"){
            let passwordExp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+/);
            if(passwordExp.test(e.target.value) && e.target.value.length > 6){
                setErrors({
                    ...errors,
                    password: ""
                })
            }   
        }
        if(e.target.name === "confirmPw"){
            if(e.target.value === reg.password){
                setErrors({
                    ...errors,
                    confirmPw: ""
                })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('http://localhost:8080/api/users/register',reg)
        .then(res => {
            if(res.data.id){
                navigate("/app")
                dispatch(setViewName("Home"))
                dispatch(login({user: res.data}))
               
            } else {
                setErrors(res.data)
                setLoading(false)
            }

        })
        .catch(err => {
            console.log(err);
            if(err.response.status === 403){
                document.getElementById("serverError").innerHTML = "Email or Username is already in use! <a href='/login'>Login</a>"
            } else {
                document.getElementById("serverError").innerHTML = "We apologize, something went wrong"
            }
            setLoading(false);
        })
        
        
    }
    const headerLinks = [
        {
            url: "/",
            label: "Home"
        },
        {
            url: "/#features",
            label: "Features"
        },
        {
            url: "/#about_us",
            label: "About Us"
        },
        {
            url: "/business/login",
            label: "Business Portal"
        }
    ]
  return (
    <div className="regBody">
        <Header links={headerLinks} />
        <section id="login_container">
        
            <div id="reg_form_container">
                <div id="form_container_header">
                        <h1>Start your Engines!</h1>
                    </div>
                <div id="form_control">
                    <form onSubmit={handleSubmit}>
                        <div className="form_input" id="checkbox_container">
                            <h5>Are you a business?</h5>
                            <label className="switch">
                                <input type="checkbox" name="isBusiness" onChange={handleInputChange} value={reg.isBusiness} id="form_checkbox" /> 
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <TextInput 
                        type="text"
                        name="email"
                        label="Email"
                        placeholder = "Ex: John@mail.com"
                        
                        handleChange={handleInputChange}
                        error={errors.email}
                        />
                        <TextInput
                        type="text"
                        name="displayName"
                        label={reg.isBusiness ? "Business Name " : "Display Name"}
                        placeholder = "JohnBMWFan"
                        value={reg.displayName}
                        handleChange={handleInputChange}
                        error={errors.userName}
                        />
                        <TextInput
                        type="password"
                        name="password"
                        label="Password"
                        value={reg.password}
                        handleChange={handleInputChange}
                        error={errors.password}
                        />
                        <TextInput
                        type="password"
                        name="confirmPw"
                        label="Confirm Password"
                        value={reg.confirmPw}
                        error={errors.confirmPw}
                        handleChange={handleInputChange}
                        />

                        <div className={`hidden ${reg.isBusiness ? "active" : ""}`}>
                            <TextInput
                                type="text"
                                name="businessAddress"
                                label="Business Address: "
                                value={reg.businessAddress}
                                handleChange={handleInputChange}
                            />
                        </div>
                        <div className="multiple_input_container">
                            <TextInput
                                type="text"
                                name="zipCode"
                                label="Zip Code"
                                value={reg.zipCode}
                                handleChange={handleInputChange}
                            />
                            <StateDropdown inputHandler={handleInputChange} />
                        </div>
                        <h3 id='serverError'></h3>
                        {
                            loading ? <CircularProgress />
                            :
                            <TextInput
                            type="submit"
                            value="Login"
                            />
                        }

                    </form>
                </div>
                <h5>Already Have an Account? <a href="/login">Login</a></h5>
            </div>
        </section> 
    </div>
  )
}

export default Register