import React, { Component } from "react";
import { connect } from "react-redux";
import { getTotalRooms, getTodayMeetings } from "../store/selectors";
import Loader from './Loader';


import { Box, Grid } from "@material-ui/core";

const styleBorderBottom = {
    borderBottom: "1px solid" 
}
class AllMeetings extends Component {
  constructor(props) {
    super(props);
  }
 generateMeetingsInfo(){
  return (
    <Grid container spacing={2}>
      <Grid container justify="left" item xs={12}>
        <Grid
          container
          justify="left"
          item
          xs={12}
          style={{...styleBorderBottom}}
        >
          Buildings {this.props.totalBuildings}
        </Grid>
        <Grid
          container
          justify="left"
          item
          xs={12}
          style={{ ...styleBorderBottom }}
        >
          Total Meeting Rooms {this.props.totalRooms}
        </Grid>
        <Grid style={{ ...styleBorderBottom }} item xs={12}>
          meetings {this.props.todayMeetings}
        </Grid>
      </Grid>
    </Grid>
  )
 }
  render() {
   return(
     this.props.isLoading ? <Loader/> : this.generateMeetingsInfo()
   )
  }
}

AllMeetings.defaultProps = {
  totalBuildings: 0,
  todayMeetings: 0,
  totalRooms: 0,
};

const mapStateToProps = (state) => {
  return {
    buildings: state.meetings.buildings.buildings,
    isLoading: state.meetings.buildings.loading,
    totalBuildings: state.meetings.buildings.buildings.length,
    totalRooms: getTotalRooms(state),
    totalMeetings:getTodayMeetings(state)
  };
};

export default connect(mapStateToProps)(AllMeetings);
