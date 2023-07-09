import styled from "styled-components";
import Img from "./me.jpg"
import Img2 from "./linkedin.png"
import Img3 from "./instagram.png"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    background-color: #a8dadc;
    height: 100vh;
    padding-top: 100px;
    display:flex;
    flex-direction: row;
`;
const LeftContainer = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

`;
const RightContainer = styled.div`
    width: 50%;
`;

const Me = styled.img`
width: 500px;
height: 500px;
`;
const Linkedin = styled.img`
width: 80px;
height: 80px;
margin-top: 50px
`;
const Instagram = styled.img`
width: 80px;
height: 80px;
margin-top: 50px
`;
const Title = styled.h1`
    font-size: 50px;
    margin-left: 50px;
    font-family: 'Lobster', cursive;
`;
const Button = styled.button`
    font-size: 40px;
    font-family: 'Lobster', cursive;
    margin-top: 40px
`;

function MainPage() {
    const navigate = useNavigate ("/learnmore")
    const verifyUserInformation = () => {
            navigate("/learnmore");
            console.log("SUCCESS");

    }
return (
    <Container>
        <LeftContainer>
        <Title>My name is Vivienne!</Title>
        <div>Communication Design major, HCI minor</div>
        <a href="https://www.linkedin.com/in/viviennechung/">
            <Linkedin src={Img2}></Linkedin> 
        </a>
        <a href="https://www.instagram.com/viviennechung_/">
        <Instagram src={Img3}></Instagram> 
        </a>
        <Button onClick={verifyUserInformation}>Learn More</Button>
        </LeftContainer>
        <RightContainer>
            <Me src={Img}></Me>
        </RightContainer>
    </Container>
)
}
export default MainPage;