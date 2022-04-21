import { Search } from '@material-ui/icons';
import React from 'react'

const TextInput = props => {
  const { name, type, value, handleChange, error, placeholder, label, icon } = props;
  return (
    <>
        {
            type !== "submit" ?
            <div className='form_input'>
              {
                label ? <h5>{label}: </h5> 
                : <></>
              }

                <input 
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    className={error ? "errorInput" : ""}
                    />
                    <br />
                    <p className="error" >{error ? error : ""}</p>
            </div> :
            <div className='form_input'>
                <input 
                type="submit"
                value={value}
                className="form_input"></input>
            </div>

        }
    </>

  )
}

export default TextInput