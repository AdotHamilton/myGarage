
import { ExitToApp, TimeToLeave } from '@material-ui/icons';
import { Backspace } from '@mui/icons-material';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MeetTile from '../components/MeetTile';
import SimpleButton from '../components/SimpleButton';
import StateDropdown from '../components/StateDropdown';
import TextInput from '../components/TextInput';
import axios from 'axios';
import "./meets.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';


const Meets = () => {

  const [ events, setEvents ] = useState([]);
  
  const user = useSelector(selectUser);
  const [ state, setState ] = useState(user.state)
  const [ form, setForm ] = useState({
    title: "",
    description: "",
    address: "",
    date: null,
    file: null,
    userId: "",
  })

  const inputHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const filterByState = (e) => {
    setState(e.target.value)
  }
  const handleImageChange = (e) => {
    setForm({
      ...form,
      file: e.target.files[0]
    })
  }
  const handleMeetForm = () => {
    document.getElementById("meet_form").classList.toggle("active");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.set("userId", user.id)
    let utcDate = new Date(form.date)
    console.log(utcDate.getTime())
    form_data.set("date", utcDate.getTime()); // convert to Milliseconds
    axios.post("http://localhost:8080/api/events/create", form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => setEvents([res.data, ...events]))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/api/events${state ? "/findByState/" + state : ""}`)
    .then(res => {
      console.log("api call to /meets")
      setEvents(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [state])
  return (
    <div id="meets_container">
        <div id="meet_form">
          <form onSubmit={handleSubmit}>
            <div id="meet_form_header">
              <h2>Create Event</h2>  
              <Backspace onClick={handleMeetForm} />
            </div>
            
            <TextInput 
              type="text"
              name="title"
              label="Title"
              value={form.title}
              handleChange={inputHandler}
            />
            <TextInput 
              type="text"
              name="description"
              label="Description"
              value={form.description}
              handleChange={inputHandler}
            />
            <TextInput 
              type="text"
              name="address"
              label="Street Address"
              value={form.address}
              handleChange={inputHandler}
            />
            
            <div className="multiple_input_container">
              <StateDropdown inputHandler={inputHandler} />
              <TextInput
                  type="text"
                  name="zipCode"
                  label="Zip Code"
                  value={form.zipCode}
                  handleChange={inputHandler}
              />
            </div>
            <div className="form_input">
                <h5>Date and Time</h5>
                <input type="datetime-local" name="date" onChange={inputHandler} />
            </div>
            <input type="file" name="file" onChange={handleImageChange} />
            <div className="form_input">
              <input type="submit" />
            </div>
            {/* End of hidden form */}

          </form>
        </div>
        <div id="meets_inner">
            <div id="meets_action">
                <h1>Search Events</h1>
                <SimpleButton onClick={handleMeetForm}>Create meet</SimpleButton>
                <StateDropdown inputHandler={filterByState} initial={state} />
            </div>
            <div id="meets_grid">
              {
                events.length > 0 ?
                events.map((event) => {
                  return <MeetTile event={event} meetDate={new Date(event.date)} />
                }) 
                : ""
              }

            </div>
        </div>
    </div>
  )
}

export default Meets