import React from "react";
// import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
import {Box, Container, Grid, Paper} from "@material-ui/core";

import Header from "../Header";
import Footer from "../Footer";
import BuildingsList from "../BuildingsList";
import AddMeeting from '../../Containers/AddMeeting';

export default function App() {
  return (
    <Grid container  spacing={2}>
      <Header/>
      <Grid container justify="center" item xs={12}>
        <Grid item xs={4}>
          <Paper elevation={0}>
            <BuildingsList />
          </Paper>
        </Grid>
        <Grid item xs={4}>
            <AddMeeting/>
        </Grid>
        <Grid item xs={4}>
          My meetings
        </Grid>
      </Grid>
      <Grid item xs={12}>
      <Box my={4}>
        <Footer />
      </Box>
      </Grid>
      
    </Grid>
  );
}
