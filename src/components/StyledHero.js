import styled from "styled-components";
import defaultBcg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${props => (props.img ? props.img : defaultBcg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
// using props and variable for css value
//use the value i have been given in props
//or use default value imported

//----> getting product page object/data using match details to isolate object from our list
//----> getting product page img from list item using styled components
