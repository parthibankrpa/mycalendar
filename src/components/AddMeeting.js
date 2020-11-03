import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";
import {
  TextField,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { getTotalRooms, getTodayMeetings } from "../store/selectors";
import Loader from "./Loader";
import FindRoom from "./FindRoom";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
  formHolder: {
    width: "100%",
    maxWidth: 500,
  },
  cardHeading: {
    color: theme.palette.secondary.main,
  },
});

class AddMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        startdatetime: "",
        endtime: "",
        seletedBuildingId: "",
      },
    };
    this.getBuildingsList = this.getBuildingsList.bind(this);
    this.inputFieldChange = this.inputFieldChange.bind(this);
  }

  getBuildingsList(buildings) {
    return buildings.map((building) => (
      <MenuItem value={building.id} key={building.id}>
        {building.name}
      </MenuItem>
    ));
  }
  inputFieldChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  getDefaultDateTime() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${(
      "0" + now.getDate()
    ).slice(-2)}T${("0" + now.getHours()).slice(-2)}:${(
      "0" + now.getMinutes()
    ).slice(-2)}`;
  }
  render() {
    const { classes } = this.props;
    const { formData } = this.state;
    return (
      <Grid item xs={12}>
        <Box width="auto" className={classes.cardsroot}>
          <Typography
            variant="h6"
            component="h6"
            align="center"
            className={classes.cardHeading}
          >
            {"NEW MEETING"}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <form className={classes.formHolder} noValidate>
            <TextField
              id="bookmeetingto"
              label="From"
              type="datetime-local"
              defaultValue={this.getDefaultDateTime()}
              className={classes.textField}
              name="startdatetime"
              onChange={this.inputFieldChange}
            />

            <TextField
              id="time"
              label="To"
              type="time"
              defaultValue="07:30"
              name="endtime"
              className={classes.textField}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={this.inputFieldChange}
            />
            {this.props.isBuildingsListReady ? (
              <Select
                name="building"
                value={formData.seletedBuildingId}
                onChange={this.inputFieldChange}
                className={classes.textField}
              >
                {this.getBuildingsList(this.props.buildings)}
              </Select>
            ) : (
              <Loader />
            )}
          </form>
        </Box>
      </Grid>
    );
  }
}

AddMeeting.defaultProps = {
  totalBuildings: 0,
  todayMeetings: 0,
  totalRooms: 0,
};

const mapStateToProps = (state) => {
  return {
    buildings: state.meetings.buildings.buildings,
    isLoading: state.meetings.buildings.loading,
    isBuildingsListReady: !state.meetings.buildings.loading,
    totalBuildings: state.meetings.buildings.buildings.length,
    totalRooms: getTotalRooms(state),
    totalMeetings: getTodayMeetings(state),
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AddMeeting));
