import React, { useState } from 'react'
import SimpleButton from './SimpleButton'
import TextInput from './TextInput';
import "./profileForm.css";
import { Backspace } from '@mui/icons-material';
import StateDropdown from './StateDropdown';
import axios from 'axios';
const ProfileForm = (props) => {
    const { user } = props;
    const initialState = {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        password: "",
        confirmPw: "",
        zipCode: user.zipCode,
    }
    const [ form, setForm ] = useState(initialState);

    const handleForm = () => {
        document.getElementById("user_form_background").classList.toggle("active");
        setForm(initialState);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/users/update", form)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

        setForm(initialState);
        
    }
    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        
    }
    return (
    <div>
        <SimpleButton onClick={handleForm}>Edit Profile</SimpleButton>
        <div id="user_form_background"> 
            <form id="user_form" onSubmit={handleSubmit}>
                <div id="user_form_header">
                    <Backspace onClick={handleForm} />
                    <h1>Edit Profile</h1>
                </div>
                <TextInput
                    type="text"
                    name="displayName"
                    label="Display Name: "
                    value={form.displayName}
                    handleChange={handleInput}
                />
                <TextInput
                    type="text"
                    name="email"
                    label="Email Address: "
                    value={form.email}
                    handleChange={handleInput}
                />
                <div className="multiple_input_container">
                    <TextInput
                        type="text"
                        name="zipCode"
                        label="Zip Code"
                        value={form.zipCode}
                        handleChange={handleInput}
                    />
                    <StateDropdown inputHandler={handleInput} />
                </div>
                <TextInput
                    type="password"
                    name="password"
                    label="Password: "
                    value={form.password}
                    handleChange={handleInput}
                />       
                <TextInput
                    type="password"
                    name="confirmPw"
                    label="Confirm Password: "
                    value={form.confirmPw}
                    handleChange={handleInput}
                />                                
                <div class="form_input" >
                    <input type="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProfileForm