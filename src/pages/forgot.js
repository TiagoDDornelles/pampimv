import React, { Fragment } from "react";
import { HeaderContainer, FooterContainer } from "../containers";
import { Forgot, Form } from "../components";

const Forgott = () => {
  return (
    <Fragment>
      <HeaderContainer bg="false" />
      <Forgot>
        <Forgot.Container>
          <Forgot.Content>
            <Forgot.Header>
              <Forgot.Title>Alterar a Senha</Forgot.Title>
            </Forgot.Header>
            <Forgot.InnerContent>
              <Form>
                <Form.FormGroup>
                  <Form.Label>Email</Form.Label>
                  <Form.Input type="text" />
                </Form.FormGroup>
                <Form.FormGroup>
                  <Form.SubmitInput type="submit" value="Enviar Alteração" />
                </Form.FormGroup>
              </Form>
            </Forgot.InnerContent>
          </Forgot.Content>
        </Forgot.Container>
      </Forgot>
      <FooterContainer />
    </Fragment>
  );
};

export default Forgott;
