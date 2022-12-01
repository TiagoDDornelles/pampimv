import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Login, Form, Add } from "../components";
import { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

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
      }).then(function (response) {
        console.log(response);

        if (response.data === 'funcionou') {
          Swal.fire({
            title: 'Login realizado com sucesso!',
            timer: 5000,
            timerProgressBar: true,
          }).then((result) => {
            history.push('/dashboard')
          })
        } else {
          Swal.fire({
            title: 'Usuário ou senha incorretos',
            timer: 5000,
            timerProgressBar: true,
          })
        }
      });

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
                  <Form.Input type="text" onChange={(e) => { setUsuario(e.target.value); }} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Input type="password" onChange={(e) => { setSenha(e.target.value); }} />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Login" onClick={Auth} />
                </Form.FormGroup>
              </Form>
            </Login.InnerContent>
            <Login.Footer>
              <Login.Text>
                <Login.Anchor to="/forgot-password">
                Esqueceu a senha ?
                </Login.Anchor>
              </Login.Text>
              <Login.Text>
                Não possui Conta ?{" "}
                <Login.Anchor to="/signup">Realizar Cadastro</Login.Anchor>
              </Login.Text>
            </Login.Footer>
          </Login.Content>
        </Login.Container>
      </Login>
      <FooterContainer />
    </Fragment>
  );
};

export default Loginn;