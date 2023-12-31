import React, { useState } from "react";
import{ TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";
import styled from 'styled-components'

import useStyles from './styles';
import { createPost } from "../../actions/posts";

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    // const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
    //     <>
    //    <h1>FORM</h1>
    //    <Paper className="classes.paper">
    //         <Form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit="handleSubmit">
    //         <Typography varient="h6">Creating a Memory</Typography>
    //         <TextField 
    //             name="creator" 
    //             varient="outlined" 
    //             label="Creator"
    //             fullWidth
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <TextField 
    //             name="title" 
    //             varient="outlined" 
    //             label="Title"
    //             fullWidth
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <TextField 
    //             name="message" 
    //             varient="outlined" 
    //             label="Message"
    //             fullWidth
    //             value={postData.creator}
    //             onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
    //         />
    //         <TextField 
    //             name="tags" 
    //             varient="outlined" 
    //             label="Tags"
    //             fullWidth
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
             {/* <label for="creator">Creator</label>   */}
             <input type="text" id="creator" name="creator" placeholder="Creator" fullWidthvalue={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             {/* <label for="title">Title</label> */}
             <input type="text" id="title" name="title" placeholder="Title" fullWidthvalue={postData.title} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             {/* <label for="message">Message</label> */}
             <input type="text" id="message" name="message" placeholder="Message" fullWidthvalue={postData.message} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             {/* <label for="tags">Tags</label> */}
             <input type="text" id="tags" name="tags" placeholder="Tags" fullWidthvalue={postData.tags} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
             <div className="{classes.fileInput}">
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                />
             </div>
             <button className="{classes.buttonSubmit}" variant="contained" color="secondary" size="small" onClick={handleSubmit} fullWidth >Submit</button>
             <button className="{classes.buttonSubmit}" variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</button>
            </form>
        </div>
        </>
    )
}

export default Form;