import React, {useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
const BusinessPortal = () => {
    const initialState = {
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
    const [reg, setReg] = useState(initialState);
    const handleInputChange = (e) => {
        setReg({
            ...reg,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

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
            url: "/business",
            label: "Business Portal"
        }
    ]
        
    
    return (
    <div>
        <Header links={headerLinks} />
        <section id="login_container">
        
        
        <div class="background_container">
            <div id="form_container">
                <div id="form_control">
                    <div id="form_container_header">
                        <h1>Welcome Back!</h1>
                        <p>Now lets get off to the races!</p>
                    </div>
                        <TextInput 
                            type="text"
                            name="Username"
                            label="Username"
                            placeholder="JohnBMWFan"
                            handleChange={handleInputChange}
                        />
                        <TextInput
                        type="password"
                        name="Password"
                        label="Password"
                        handleChange={handleInputChange}
                        />
                        <TextInput
                        type="submit"
                        value="Login"
                        />
                    
                        <h5>Dont have an account? <a href="/business/register">Register</a></h5>
                </div>
            
            </div>
        </div>
        
        
    </section>
    </div>
  )
}

export default BusinessPortal;