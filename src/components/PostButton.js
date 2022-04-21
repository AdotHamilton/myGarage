import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Divider, FormHelperText, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { Backspace } from '@material-ui/icons';
import { useDropzone } from 'react-dropzone';
import { Avatar } from '@material-ui/core';
import "./postButton.css";
import SimpleButton from './SimpleButton';
const PostButton = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({

     onDrop: files => {
      console.log("dropped");
      setPreview(Object.assign(files[0], {
        preview: URL.createObjectURL(files[0])
      }))
      handleImageChange(files)
      
    }
  })

  
  const [ form, setForm ] = useState({
    creator_id: '',
    content: '',
    image: null
  })
  const [ preview, setPreview ] = useState(false);
  const handleImageChange = (files) => {
    setForm({
      ...form,
       image: files[0]
    })

  }
  const handleInput = (e) => {
    setForm({
      ...form,
      content: e.target.value
    })
  }
  const handlePostForm = () => {
    document.getElementById("post_background").classList.add("active");
    console.log("opened post form")
  }
  const closePostForm = () => {
    document.getElementById("post_background").classList.remove("active");
    console.log("closed post form")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    if(form.image){
      form_data.append("file", form.image, form.image.name)
    }
    if(form.content.length > 0 && form.content.length < 240 ){
      form_data.append("content", form.content);
    }
    
    let url = "http://localhost:8080/api/posts/" + user.id;
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      props.handleUpdate(res.data);
      URL.revokeObjectURL(preview.preview)
      setPreview()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='feed_post'>
      <div onClick={handlePostForm} id="post_prompt">
        <Avatar src={user.pfp} /> 
        <label>
          <input type="text" placeholder='Create a Post' />
        </label>
        </div>
      <div id="post_background">
        <div id="post_form">
          <form>
            <div id="form_header">
              <Backspace onClick={closePostForm}/>
              <h1>Create Post</h1>
            </div>
            <Divider />
            <div id="post_form_bottom">
              <div className='form_control'>
              <TextField
                id="outlined-textarea"
                multiline
                fullWidth
                color={form.content.length > 240 ? "secondary" : "primary" }
                label={`Content ${form.content.length > 0 ? form.content.length + " / 240": ""} ` }
                value={form.content}
                onChange={handleInput} /> 
              </div>
                 
              <Divider />
              <div class="form_control" id="dropzone">
                <Paper
                  {...getRootProps()}
                  multiple={false}
                  elevation={0}
                  className={ `dropzoneContainer ${isDragActive ? "active" : ""}`  }
                  
                >
                  <input {...getInputProps()} />

                  <p>Drag files here, or click to select files</p>
                </Paper>
                
                {
                  preview ? 
                  <div>
                    <img src={preview.preview} height={"200px"} /> 
                    <p>{preview.name}</p>
                  </div>
                  : ""
                }
              </div>
            </div>
            <div className="form_input" onClick={handleSubmit}>
                <input type="submit" />
              </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default PostButton;