import styled from "styled-components";
import Img from "./school.png"
import { ProgressBar, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const Container = styled.div`
    background-color: #ffddd2;
    height: 100%;
    padding-top: 100px;
    display:flex;
    flex-direction: column;
`;
const LeftContainer = styled.div`
width: 50%;
`;
const RightContainer = styled.div`
width: 50%;
`;
const Title = styled.h1`
    font-size: 60px;
    margin-left: 300px;
    font-family: 'Lobster', cursive;
`;
const Title2 = styled.div`
font-size: 20px;
margin-left: 30px
`;
const Title3 = styled.div`
margin-top: 20px;
margin-left: 30px
`
const Title4 = styled.div`
margin-top: 20px;
margin-left: 30px
`
const Title5 = styled.div`
margin-top: 20px;
margin-left: 30px
`
const Title6 = styled.div`
margin-top: 20px;
margin-left: 30px
`
const Title7 = styled.div`
margin-top: 20px;
margin-left: 30px
`
const School = styled.img`
width: 350px;
height: 350px;
margin-left: 90px;
margin-top: 80px;
`
const TopContainer = styled.div`
display:flex;
flex-direction: row;
`
const BottomContainer = styled.div`
background-color: #ffb5a7;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title8 = styled.div`  
    font-size: 60px;
    font-family: 'Lobster', cursive;
    margin-top: 100px;
`

const Title9 = styled.div`  
margin-top: 20px;
margin-left: 600px
font-size: 80px;
`
const Title10 = styled.div`  
margin-top: 20px;
margin-left: 600px
font-size: 80px;
`
const Title11 = styled.div`  
margin-top: 20px;
margin-left: 600px
font-size: 80px;
`

function LearnMorePage() {
    const Barstyle = {
        width: "300px",
        height: "40px",
    }
return(
    <Container>
        <TopContainer>
        <LeftContainer>
        <Title>About Me</Title>
        <Title2>Hi, my name is Vivienne Chung, and I am from Seoul, South Korea.</Title2>
        <Title3> I just graduated from Seoul International School, and I'm going to continue my studies at Washington University in St. Louis. I am planning on studying communication design and human-computer interaction.</Title3>
        <Title4>Name: Vivienne Chung</Title4>
        <Title5>Email: viviennechung13@gmail.com</Title5>
        <Title6>Phone: 010 5141 3644</Title6>
        <Title7>Date of Birth: February 5 2005</Title7>
        </LeftContainer>
        <RightContainer>
        <School src={Img}></School>
        </RightContainer>
        </TopContainer>
        <BottomContainer>
        <Title8>Education</Title8>
        <Title9>GPA</Title9>
        <ProgressBar 
        style={Barstyle}
        label= {`4.0/4.0`}
        max={4.0}
        min={0}
        now={4.0}
        />
        <Title10>SAT</Title10>
        <ProgressBar 
        style={Barstyle}
        label= {`1580/1600`}
        max={1600}
        min={0}
        now={1580}
        />
        <Title11>AP 2D Design</Title11>
        <ProgressBar 
        style={Barstyle}
        label= {`5/5`}
        max={5}
        min={0}
        now={5}
        />
        </BottomContainer>
    </Container>
)

}

export default LearnMorePage