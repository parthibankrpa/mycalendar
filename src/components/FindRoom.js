import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

import { getAllBuildings } from "../store/actions/meetings";

class FindRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seletedBuildingId: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getAllBuildings();
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      seletedBuildingId: e.target.value

    })
  }

  getBuildingsList(buildings) {
    return buildings.map((building) => (
      <MenuItem value={building.id} key={building.id}>{building.name}</MenuItem>
    ));
  }
  render() {
    return (
      <div>
        <FormControl>
         
          <Select
            name="building"
            value={this.state.seletedBuildingId}
            onChange={this.handleChange}
          >
            {this.getBuildingsList(this.props.buildings)}
          </Select>
          <FormHelperText>List of buildings</FormHelperText>
        </FormControl>
      </div>
    );
  }
}
FindRoom.defaultProps = {
  buildings: [],
};

const mapStateToProps = (state) => {
  return { 
    buildings: state.meetings.buildings.buildings
   };
};

export default connect(mapStateToProps, { getAllBuildings })(FindRoom);
