import React from 'react'
import Header from '../components/Header'

const BusinessReg = () => {
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
    <div>
        <Header links={headerLinks}/>
        <section id="login_container">
        
        
            <div id="reg_form_container" className='businessReg'>
                <div id="form_control">
                    <div id="form_container_header">
                        <h1>Register your Business!</h1>
                    </div>

                    <form>
                        <div class="form_input">
                            <h5>Email: </h5>
                            <input type="text" name="Email" />
                        </div>
                        <div class="form_input">
                            <h5>Business Name: </h5>
                            <input type="text" name="username" />
                        </div>
                        <div class="form_input">
                            <h5>Street Address</h5>
                            <input type="text" name="street_address" />
                            <div class="smaller_input_container">
                                <div class="smaller_input" id="zip">
                                    <h5>Zip</h5>
                                    <input type="text" name="zip" />
                                </div>
                                <div class="smaller_input">
                                    <h5>State</h5>
                                    <select name="state">
                                        <option value="AL">AL</option>
                                        <option value="AK">AK</option>
                                        <option value="AZ">AZ</option>
                                        <option value="AR">AR</option>
                                        <option value="CA">CA</option>
                                        <option value="CO">CO</option>
                                        <option value="CT">CT</option>
                                        <option value="DE">DE</option>
                                        <option value="DC">DC</option>
                                        <option value="FL">FL</option>
                                        <option value="GA">GA</option>
                                        <option value="HI">HI</option>
                                        <option value="ID">ID</option>
                                        <option value="IL">IL</option>
                                        <option value="IN">IN</option>
                                        <option value="IA">IA</option>
                                        <option value="KS">KS</option>
                                        <option value="KY">KY</option>
                                        <option value="LA">LA</option>
                                        <option value="ME">ME</option>
                                        <option value="MD">MD</option>
                                        <option value="MA">MA</option>
                                        <option value="MI">MI</option>
                                        <option value="MN">MN</option>
                                        <option value="MS">MS</option>
                                        <option value="MO">MO</option>
                                        <option value="MT">MT</option>
                                        <option value="NE">NE</option>
                                        <option value="NV">NV</option>
                                        <option value="NH">NH</option>
                                        <option value="NJ">NJ</option>
                                        <option value="NM">NM</option>
                                        <option value="NY">NY</option>
                                        <option value="NC">NC</option>
                                        <option value="ND">ND</option>
                                        <option value="OH">OH</option>
                                        <option value="OK">OK</option>
                                        <option value="OR">OR</option>
                                        <option value="PA">PA</option>
                                        <option value="RI">RI</option>
                                        <option value="SC">SC</option>
                                        <option value="SD">SD</option>
                                        <option value="TN">TN</option>
                                        <option value="TX">TX</option>
                                        <option value="UT">UT</option>
                                        <option value="VT">VT</option>
                                        <option value="VA">VA</option>
                                        <option value="WA">WA</option>
                                        <option value="WV">WV</option>
                                        <option value="WI">WI</option>
                                        <option value="WY">WY</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form_input">
                            <h5>Password: </h5>
                            <input type="text" name="password" />
                        </div>
                        <div class="form_input">
                            <h5>Confirm Password: </h5>
                            <input type="text" name="confirmpw" />
                            <p>We will never share your password</p>
                        </div>
                        
                        <div class="form_input">
                            <input type="submit" value="Submit" />
                            <p>Already have an account? <a href="/business/login">Login</a></p>
                        </div>
                    </form>
                </div>
            
            </div>
        
        
        
        </section> 
    </div>
  )
}

export default BusinessReg;