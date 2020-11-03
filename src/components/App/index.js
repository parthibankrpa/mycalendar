import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from "@material-ui/core";

import Header from "../Header";
import Footer from "../Footer";
import AddMeeting from "../AddMeeting";
import AllMeetings from "../AllMeetings";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backgroundColor,
  },
  cardsroot: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      height: "100%",
      display: "block",
      width: "100%",
      backgroundColor: theme.palette.backgroundColor,
      color: theme.palette.text.primary,
    },
  },
  cardHeading: {
    color: theme.palette.secondary.main,
  },
}));

const styleBorder = {
  border: "1px solid",
};

export default function App() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Header />
      <Grid container justify="center" item xs={12}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3} className={classes.cardsroot}>
          <Paper>
            <Grid item xs={12} justify="center">
              <Typography
                variant="h6"
                component="h6"
                className={classes.cardHeading}
                align="center"
              >
                {" ALL MEETINGS"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AllMeetings />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={7} className={classes.cardsroot}>
          <Paper>
            <AddMeeting />
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  );
}
