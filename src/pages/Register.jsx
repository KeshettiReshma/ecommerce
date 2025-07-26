import styled from "styled-components";
import cutegirl from "../assets/cute-girl.jpeg";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
 
const Container =styled.div`
width: 100vw;
height: 100vh; 
background: linear-gradient(
rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
),
url(${cutegirl}) center;
display: flex;
align-items: center;
justify-content: center;

 `;

const Wrapper =styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
 `;

const Title =styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form =styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input =styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const ErrorText =styled.p`
color: red;
font-size: 12px;
margin-top: 5px;
margin-left: 10px;

`;

const Agreement =styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor: pointer;
`;

 const Register = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const handleRegister = (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const lastName = e.target[1].value;
  const username = e.target[2].value;
  const email = e.target[3].value;
  const password = e.target[4].value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setEmailError("Please enter a valid email (e.g. user@example.com)");
    return;
  } else {
    setEmailError("");
  }

  if (!name || !lastName || !username || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = existingUsers.find(
    (user) => user.email === email || user.username === username
  );

  if (userExists) {
    alert("User already registered. Please login.");
    navigate("/login");
    return;
  }

  const newUser = {
    name,
    lastName,
    username,
    email,
    password,
  };


  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  alert("Registered Successfully!");
  navigate("/login");
};


    
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleRegister}>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            {emailError && <ErrorText>{emailError}</ErrorText>}
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY</b></Agreement>
      <Button type="submit" >CREATE</Button>
        </Form>
       </Wrapper>
    </Container>
  );
};

export default Register;
