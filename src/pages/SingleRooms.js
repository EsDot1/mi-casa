import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { RoomContext } from "../context";

export class SingleRooms extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg: defaultBcg
    };
  }
  //bring in state
  static contextType = RoomContext;
  render() {
    //what i need from state
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    //---> where room is the object of details this component needs
    // console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>...oops unfortunately this room is unavailable</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    //deconstruct room object
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <StyledHero img={images[0] || this.setState.defaultImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default SingleRooms;

//rce

/* -----the other way ----
class SingleRooms extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
*/
//---------->
/*
 on a page that is a by product of {Link,Route} match props available
use match properties to identify object and its details the page should show 

capture that value from match and intialise  state  and store value 
*/
