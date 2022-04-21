import { Backspace } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import SimpleButton from './SimpleButton';
import "./vehicleForm.css";
const VehicleForm = () => {
    const initialState = {
        year: 2021,
        make: "",
        model: "",
        vehicleType: "",
        user_id: 0
    }
    const [ form, setForm ] = useState(initialState);
    const user = useSelector(selectUser)
    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        
    }
    const handleForm = () => {
        document.getElementById("vehicle_form_background").classList.toggle("active");
        setForm(initialState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({...form, user_id: user.id})
        console.log(user.id);
        axios.post("http://localhost:8080/api/users/garage/add", form)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if(form.vehicleType.length > 0 && form.make.length > 0){ // validating that the user input the vehicle type and make before getting model
            axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${form.make}/modelyear/${form.year}/vehicleType/${form.vehicleType}?format=json`) // returns a list of vehicle models based on vehicle type, production year, and vehicle make
            .then(res => {
                let resultList = res.data.Results;
                let modelSelect = document.getElementById("model"); // grabbing the select box for model
                let options = []; // create empty array
                resultList.forEach((result) => { //for each model returned
                    let option = document.createElement("option"); //create new <option value="vehicleModel">vehicle model<option>
                    option.text = result.Model_Name; 
                    option.value = result.Model_Name;
                    option.name = result.Model_Name;
                    options.push(option); 
                }) // populating options array with vehicle models returned
                modelSelect.replaceChildren(...options); // replacing the previous <Select>(options)</select> with the new results
                modelSelect.removeAttribute("disabled"); // finally the model select box can be interacted with
            })
        }
    }, [form.make, form.year, form.vehicleType])

    return (
        <>
            <SimpleButton onClick={handleForm}>Add Vehicles</SimpleButton>
            <div id="vehicle_form_background"> 
                <form id="vehicle_form" onSubmit={handleSubmit}>
                    <div id="vehicle_form_header">
                        <Backspace onClick={handleForm} />
                        <h1>Add A Vehicle</h1>
                    </div>

                    <div class="form_input">
                        <h5>Year: </h5>
                        <input type="number" id="year" name="year" min="1990" max="2021" value={form.year} onChange={handleInput} />
                    </div>
                    <div class="form_input">
                        <h5>Body Style</h5>
                        <select name="vehicleType" id="vehicle_type" list="vehicle_type" onChange={handleInput}>
                            <option value="">- Select Type -</option>
                            <option value="Car">Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Motorcycle">Motorcycle</option>
                        </select>
                    </div>
                    <div class="form_input">
                        <h5>Make: </h5>
                        <select name="make" id="make" onChange={handleInput} value={form.make}>
                            <option value="">- Select Make -</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Ford">Ford</option>
                            <option value="Holden">Holden</option>
                            <option value="Honda">Honda</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Isuzu">Isuzu</option>
                            <option value="Kia">Kia</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Subaru">Subaru</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Volkswagen">Volkswagen</option>
                        </select>
                    </div>
                    <div class="form_input">
                        <h5>Model: </h5>
                        <select name="model" id="model" value={form.model} onChange={handleInput} >
                            <option value="">-Select Model-</option>
                        </select>
                    </div>
                    <div class="form_input" >
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
  )
}

export default VehicleForm