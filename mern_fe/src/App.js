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
        //     <Grow in>
        //         <Container>
        //             <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        //                 <Grid item={12} sm={7}>
        //                     <Posts />
        //                 </Grid>
        //                 <Grid item={12} sm={4}>
        //                     <Form />
        //                 </Grid>
        //             </Grid>
        //         </Container>
        //     </Grow>
        // </Container>

        <div maxWidth="lg">
            <div position="static" color="inherit">
                <h2 align="center">memories</h2>
                <img src={memories} alt="memories" height="60"/>
            </div>
            <div>
                <div>
                    <div>
                        <Posts />
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App