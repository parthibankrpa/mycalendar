import React, { Component }from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

class BuildingsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            buildings : []
        }
    }
    componentDidMount() {
        fetch('http://smart-meeting.herokuapp.com',{
            method:'POST',
            headers:{"Content-Type":"application/json","token":"a123gjhgjsdf6576"},
            body:JSON.stringify({
                query:`{
                    Buildings {
                        id,name
                    }
                }`
            })
        }).then(obj => obj.json()).then(data => { 
             this.setState({...this.state, buildings:[...data.data.Buildings]})
        });
      }
      render(){
          return (
            <List dense={false}>
                {
                    this.state.buildings.map(({id,name}) => {
                        return (
                            <ListItem key={id}>  
                                <ListItemText primary={name} />
                            </ListItem>
                        )
                    })
                }
            
          </List>
          );
      }
}

export default BuildingsList;