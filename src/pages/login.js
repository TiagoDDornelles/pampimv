import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form, Add} from "../components";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AddLisiting from './add-listing';

// const Loginn = () => {

//   const [usuario, setUsuario] = useState("");
//   const [senha, setSenha] = useState("");
//   const [loginStatus, setloginStatus] = useState("");

//   const login = () => {
//     Axios.post("http://localhost:3001/login",{
//       usuario: usuario,
//       senha: senha,
//     }).then((Response)=>{
//       if(Response.data.message){
//         setloginStatus(Response.data.message)
//       }else{
//         setloginStatus(Response.data[0].usuario)
//       }
//     });
//   };

  const Loginn = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [loginStatus, setloginStatus] = useState("");
    const [msg, setMsg] = useState('');
    const history = useHistory();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', {
              usuario: usuario,
              senha: senha
            });
            history.push(AddLisiting);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 

  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Login>
        <Login.Container>
          <Login.Content>
            <Login.Header>
              <Login.Title>Login</Login.Title>
            </Login.Header>
            <Login.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Email/Usuario</Form.Label>
                  <Form.Input type="text" onChange ={(e)=>{setUsuario(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="password" onChange ={(e)=>{setSenha(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Login" onClick={Loginn} />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
            <Login.Footer>
              <Login.Text>
                <Login.Anchor to="/forgot-password">
                  Forgot Password ?
                </Login.Anchor>
              </Login.Text>
              <Login.Text>
                Don't have an Account ?{" "}
                <Login.Anchor to="/signup">Sign Up</Login.Anchor>
              </Login.Text>
              <h1>Resultado:{loginStatus}</h1>
            </Login.Footer>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Loginn;
