import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RooomContext } from "../context";

export class SingleRooms extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <div>Hello from Single Room Page</div>;
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
/* on a page that is a by product of {Link,Route} match props available
use match properties to identify object and its details the page should show 
*/
