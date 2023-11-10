import React from "react";
import { Container, AppBar, Typography, Grow, Grid, styled } from '@material-ui/core'

import memories from './Images/memories.png'



const App = () => {
    return (
        // <Container maxWidth="lg">
        //     <AppBar position="static" color="inherit">
        //         <Typography variant="h2" align="center">memories</Typography>
        //         <img src={memories} alt="memories" height="60"/>
        //     </AppBar>
        // </Container>
        <div>
            <h2>memories</h2>
            <img src={memories} alt="memories" height="60"/>
        </div>
    )
}

export default App