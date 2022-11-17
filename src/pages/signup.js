import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import Axios from 'axios';
import { useState } from "react";
import Swal from "sweetalert2";




const Signupp = () => {

  const [usuarioReg, setUsuarioReg] = useState("");
  const [senhaReg, setSenhaReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  
  const register = () => {
  
    Axios.post("http://localhost:3001/register",{
      usuario: usuarioReg,
      senha: senhaReg,
      email: emailReg,
    }).then((Response)=>{
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    });
  };

  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Signup</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Name</Form.Label>
                  <Form.Input type="text" onChange ={(e)=>{setUsuarioReg(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="text" onChange ={(e)=>{setEmailReg(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="text" onChange ={(e)=>{setSenhaReg(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Signup" onClick={register}/>
                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
            <Signup.Footer>
              <Signup.Text>
                Already Have Account ?{" "}
                <Signup.Anchor to="/login">Login</Signup.Anchor>
              </Signup.Text>
            </Signup.Footer>
          </Signup.Content>
        </Signup.Container>
      </Signup>
      <FooterContainer />
    </Fragment>
  );
};

export default Signupp;
