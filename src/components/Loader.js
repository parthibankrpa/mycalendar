import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid} from "@material-ui/core";



export default function CircularIndeterminate() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={3}>
        <CircularProgress/>
      </Grid>
    </Grid>
  );
}
