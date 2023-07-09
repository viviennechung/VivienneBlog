import styled from "styled-components";
import Img from "./Cape_may.jpg"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    background-color: #a8dadc;
    height: 100vh;
    display: flex;
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
    background-image: url(${Img});
`;
const Title = styled.h1`
    font-size: 40px;
    text-align: center;
    margin-top: 90px;
    font-family: 'Lobster', cursive;
`;
const Label = styled.label`
    font-size: 24px;
    margin-left: 30px ;
    margin-right: 20px;
    font-family: 'Lobster', cursive;
`;
    

const Input = styled.input`
font-family: 'Lobster', cursive;
font-size: 20px;
`;

const Button = styled.button`
    font-size: 20px;
    font-family: 'Lobster', cursive;
`;

const Wrapper = styled.div`
margin-top:30px;
margin-bottom: 30px;
display:flex;
flex-direction: row;
justify-content:center;`

function LoginPage() {
    const navigate = useNavigate ("/main")
    // to keep the values, you must use state !!
    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const changeUserInput = (event) => {
        const {name, value } = event.target;
        setUser ({
            ...user,
            [name]: value,
        });
    };
    const verifyUserInformation = () => {
        if (user.id == "vivienne" && user.password == "1234") {
            navigate("/main");
            console.log("SUCCESS");
        }
        
            else {
                alert ("Wrong Id/Password")
        }
    }
    return(
        <Container>
            <LeftContainer>
                <Title>Welcome Back!</Title>
                <Wrapper>
                    <Label>ID</Label>
                    <Input type="text" name = "id" value = {user. id} onChange={changeUserInput}></Input>
                </Wrapper>
                <Wrapper>
                <Label>Password</Label>
                <Input type="password" name = "password" value = {user. password} onChange={changeUserInput}></Input>
                </Wrapper>
                <Button onClick={verifyUserInformation}>Log In</Button>
                </LeftContainer>
            <RightContainer></RightContainer>
        </Container>
        );
}
export default LoginPage;

