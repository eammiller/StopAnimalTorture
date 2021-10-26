import styled from "styled-components";
import image from "../images/stoptorture.png";
function Footer() {
  return (
    <Feet>
      <img src={image} alt="" />
      <div><p>2021 stopanimaltorture</p></div>
    </Feet>
  );
}
export default Footer;

const Feet = styled.div`
opacity: 50%;
  background-color: white;
  padding-top: 60px;
  text-align: center;
  text-transform: uppercase;
  &:hover{
      opacity: 100%;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
  }
`;
