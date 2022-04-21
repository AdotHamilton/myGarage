import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from '@reach/router'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, login } from '../redux/userSlice'
import { Redirect } from '@reach/router'
import { CircularProgress } from '@mui/material'
import { setViewName } from '../redux/appSlice'
const Login = ({path}) => {
    const [ loading, setLoading ] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialState = {
        email:"",
        password:"",
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
        setLoading(true);
        axios.post("http://localhost:8080/api/users/login", reg)
        .then(res => {
            navigate("/app")
            dispatch(setViewName("Home"))
            dispatch(login({user: res.data}));
            
            localStorage.setItem("user_id", res.data.id);
            
        })
        .catch(err => {
            if(err.response && err.response.status === 401){
               document.getElementById("error").innerHTML =
                "User is invalid" 
            } else {
                document.getElementById("error").innerHTML = "Sorry, we had an issue on our end. Please try again later."
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
            url: "/business",
            label: "Business Portal"
        }
    ]
        
    
    return (
    <div id="body">
        <Header links={headerLinks} />
        <section id="login_container">
        
        
        <div className="background_container">
            <div id="form_container">
                <div id="form_control">
                    <div id="form_container_header">
                        <h1>Welcome Back!</h1>
                        <p>Now lets get off to the races!</p>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <TextInput 
                            type="text"
                            name="email"
                            label="Email"
                            placeholder="John@mail.org"
                            handleChange={handleInputChange}
                        />
                        <TextInput
                        type="password"
                        name="password"
                        label="Password"
                        handleChange={handleInputChange}
                        />

                        <p id="error"></p>
                        {
                            loading ? <CircularProgress />
                            :
                            <TextInput
                            type="submit"
                            value="Login"
                            />
                        }
                        
                       
                    </form>
                    
                        <h5>Dont have an account? <a href="/register">Register</a></h5>
                </div>
            
            </div>
        </div>
        
        
    </section>
    </div>
  )
}

export default Login