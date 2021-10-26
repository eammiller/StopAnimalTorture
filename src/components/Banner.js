import styled from "styled-components";
function Banner() {
    return (
        <Banana>
            <p> all proceeds 100% towards charity</p>

        </Banana>
    )
}
export default Banner;

const Banana = styled.div`
    margin-bottom: 8px;
    padding: 5px;
    background-color: #ff85d8;
    color: white;
    text-align: center;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
    box-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);;
    text-transform: uppercase;
    font-weight: 900;
`