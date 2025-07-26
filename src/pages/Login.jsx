import styled from "styled-components";
 import posingchair from "../assets/posing-chair.jpg";
 import {mobile} from "../responsive";
 import { useNavigate } from "react-router-dom";

const Container =styled.div`
width: 100vw;
height: 100vh; 
background: linear-gradient(
rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.33)
),
url(${posingchair}) center; 
background-size: cover;

display: flex;
align-items: center;
justify-content: center;

 `;

const Wrapper =styled.div`
width: 25%;
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
flex-direction: column;
`;

const Input =styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;


const Button =styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color:white;
cursor: pointer;
margin-bottom: 10px;
`;

const Link =styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;


 const Login = () => {

  const navigate = useNavigate();   

 const handleLogin = (e) => {
  e.preventDefault();

  const enteredUsername = e.target[0].value;
  const enteredPassword = e.target[1].value;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  
  const existingUser = storedUsers.find(
    (user) => user.username === enteredUsername
  );

  if (!existingUser) {
    alert("Account not found. Please register.");
    navigate("/register");
    return;
  }

  if (existingUser.password !== enteredPassword) {
    alert("Incorrect password. Please try again.");
    return;
  }

  
  alert("Login Successful!");
  localStorage.setItem("isLoggedIn", "true");
  navigate("/home");
};
  
  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
            <Input placeholder="username"/>
            <Input placeholder="password" type="password"/>
      <Button type="submit" >LOGIN</Button> 
      <Link>
      DO NOT YOU REMEMBER THE PASSWORD?
      </Link>
      <Link onClick={() => navigate ("/register")}>
      CREATE A NEW ACCOUNT
      </Link>
        </Form>
       </Wrapper>
    </Container>
  );
};

export default Login;
