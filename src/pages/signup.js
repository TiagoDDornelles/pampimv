import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Signup, Form } from "../components";
import { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import axios from "axios";

  const Signupp = () => {
    const [usuarioReg, setUsuarioReg] = useState("");
    const [senhaReg, setSenhaReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [confPassword, setSenhaReg2] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();
 
    const Signupp = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/register', {
              usuario: usuarioReg,
              email: emailReg,
              senha: senhaReg,
            });
            history.push("/login");
            Swal.fire(
                       'Cadastro concluido com sucesso!',
                     )
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Signup>
        <Signup.Container>
          <Signup.Content>
            <Signup.Header>
              <Signup.Title>Novo Cadastro</Signup.Title>
            </Signup.Header>
            <Signup.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Nome</Form.Label>
                  <Form.Input type="text" onChange ={(e)=>{setUsuarioReg(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="text" onChange ={(e)=>{setEmailReg(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Senha</Form.Label>
                  <Form.Input type="password" onChange ={(e)=>{setSenhaReg(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Confirmar Senha</Form.Label>
                  <Form.Input type="password" onChange ={(e)=>{setSenhaReg2(e.target.value);}}/>
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Cadastrar" onClick={Signupp}/>

                </Form.FormGroup>
              </Form>
            </Signup.InnerContent>
            <Signup.Footer>
              <Signup.Text>
                Já tem conta ?{" "}
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