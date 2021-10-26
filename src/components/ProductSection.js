import styled from "styled-components";
import Prodcard from "./Productcard";

function ProdSection(props) {
  return (
    <PSection>
      <Prodcard title="big tee shirt" price="$5555" />
      <Prodcard title="pajamas" price="$566" />
      <Prodcard title="crop top" price="$3" />
      <Prodcard title="track pants" price="$22" />
      <Prodcard title="hoodie" price="$9" />
    </PSection>
  );
}

export default ProdSection;

const PSection = styled.div`
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
