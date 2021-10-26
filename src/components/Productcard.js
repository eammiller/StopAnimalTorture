import styled from "styled-components";
import productImg from "../images/tee1.jpg";

function Prodcard(props) {
  return (
    <Pcard href="./">
      <img src={productImg} alt="error" />
      <div className="productTitle">{props.title}</div>
      <div className="productPrice">{props.price}</div>
    </Pcard>
  );
}

export default Prodcard;

const Pcard = styled.div`
  font-size: 12px;
  line-height: 24px;
  padding-bottom: 10px;
  text-transform: uppercase;
  width: 44%;
  margin-top: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  img {
    width: 100%;
  }
`;
