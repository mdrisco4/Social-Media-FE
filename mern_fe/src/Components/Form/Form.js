import React, { useState } from "react";
import{ TextField, Button, Typography, Paper } from '@material-ui/core'
import styled from 'styled-components'

import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    // const classes = useStyles();

    const handleSubmit = () => {

    }
    return (
    //     <>
    //    <h1>FORM</h1>
    //    <Paper className="classes.paper">
    //         <Form autoComplete="off" noValidate className="classes.form" onSubmit="handleSubmit">
    //         <Typography varient="h6">Creating a Memory</Typography>
    //         <TextField 
    //             name="Creator" 
    //             varient="outlined" 
    //             label="Creator" 
    //             value={postData.creator}
    //             onChange={}/>
    //         </Form>
    //     </Paper> 
    //     </>
        <>
        <div>
            <div>
             <h6>Creating a Memory</h6>  
             <div></div>
            </div>
        </div>
        </>
    )
}

export default Form;