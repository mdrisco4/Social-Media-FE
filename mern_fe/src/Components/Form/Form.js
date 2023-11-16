import React, { useState } from "react";
import{ TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import styled from 'styled-components'

import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    // const classes = useStyles();

    const handleSubmit = () => {

    }
    const clear = () => {

    }

    return (
    //     <>
    //    <h1>FORM</h1>
    //    <Paper className="classes.paper">
    //         <Form autoComplete="off" noValidate className="classes.form" onSubmit="handleSubmit">
    //         <Typography varient="h6">Creating a Memory</Typography>
    //         <TextField 
    //             name="creator" 
    //             varient="outlined" 
    //             label="Creator" 
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <TextField 
    //             name="title" 
    //             varient="outlined" 
    //             label="Title" 
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <TextField 
    //             name="message" 
    //             varient="outlined" 
    //             label="Message" 
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <TextField 
    //             name="tags" 
    //             varient="outlined" 
    //             label="Tags" 
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <div className="{classes.fileInput}">
    //             <FileBase 
    //                 type="file"
    //                 multiple={false}
    //                 onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
    //             />
    //          </div>
    //          <Button className="{classes.buttonSubmit}" variant="contained" color="primary" size="large" type="submit" fullWidth ></Button>
    //          <Button className="{classes.buttonSubmit}" variant="contained" color="secondary" size="small" onClick={clear} fullWidth ></Button>
    //         </Form>
    //     </Paper> 
    //     </>
        <>
        <div>
            <form onSubmit="handleSubmit">
             <h6>Creating a Memory</h6>
             <label for="creator">Creator</label>  
             <input type="text" id="creator" name="creator" onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             <label for="title">Title</label>
             <input type="text" id="title" name="title" onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             <label for="message">Message</label>
             <input type="text" id="message" name="message" onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             <label for="tags">Tags</label>
             <input type="text" id="tags" name="tags" onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             <div className="{classes.fileInput}">
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                />
             </div>
             <button className="{classes.buttonSubmit}" variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</button>
            </form>
        </div>
        </>
    )
}

export default Form;