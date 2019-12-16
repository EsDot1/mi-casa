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
    const [mainImg, ...otherImgs] = images;
    console.log(otherImgs);
    return (
      <>
        <StyledHero img={mainImg || this.setState.defaultImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {otherImgs.map((item, index) => {
              return <img key={index} src={item} alt="image" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : £{price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? `pets allowed` : `no pets allowed`}</h6>
              <h6>{breakfast && `free breakfasr included`}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
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

conditional rendering content withing hard coded elements
*/
