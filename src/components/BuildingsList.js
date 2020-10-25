import React, { Component } from "react";
import { connect } from 'react-redux';
import smartmeeting from "../api/smartmeeting";
import { List, ListItem, ListItemText } from "@material-ui/core";

class BuildingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
    };
    this.getBuildingsList.bind(this);
  }
   getBuildingsList = async () => {
    const response = await smartmeeting.post('',{query: `{
        Buildings {
            id,name
        }
      }`});
    
    this.setState({
      ...this.state,
      buildings: [...response.data.data.Buildings],
    });
  }
  

  componentDidMount() {
    // this.getBuildingsList();
  }
  renderBuildingsList(){
    return (<List dense={false}>
      {this.props.buildings.map(({ id, name }) => {
        return (
          <ListItem key={id}>
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </List>);
  }
  render() {
    return (
      <div>
        {this.renderBuildingsList()}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  
  return {
    buildings:state.buildings||[]
  };
}

export default connect(mapStateToProps)(BuildingsList);
