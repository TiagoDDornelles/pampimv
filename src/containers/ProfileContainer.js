import React, { useRef } from "react";
import { Profile, Form } from "../components";

const ProfileContainer = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };
  return (
    <Profile>
      <Form>
        <Profile.Avatar>
          <Profile.Title>Meu Avatar</Profile.Title>
          <Profile.AvatarContent>
            <Profile.Image source="default.jpg" />
            {/* Special file input case */}

            <input
              type="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
            />

            <Profile.Button onClick={handleClick}>
              Fazer Upload
            </Profile.Button>
          </Profile.AvatarContent>
        </Profile.Avatar>
        <Profile.Bio>
          <Profile.BioTop>
            <Form.FormGroup>
              <Form.Label>Nome</Form.Label>
              <Form.Input type="text" value="Tiago Dornelles" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Input type="text" value="caster@gmail.com" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Celular</Form.Label>
              <Form.Input type="text" value="+9 9999-9090" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Endereço</Form.Label>
              <Form.Input type="text" value="P.0 22344 Brasil" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Pais</Form.Label>
              <Form.Input type="text" value="Brasil" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label>Estado</Form.Label>
              <Form.Input type="text" value="Rio Grande do Sul" />
            </Form.FormGroup>
          </Profile.BioTop>
          <Profile.BioBottom>
            <Form.FormGroup>
              <Form.Label>About</Form.Label>
              <Form.TextArea name="" id="" cols="30" rows="10"></Form.TextArea>
            </Form.FormGroup>
          </Profile.BioBottom>
        </Profile.Bio>
        <Profile.Social>
          <Profile.SocialHeader>
            <Profile.Title>Redes Sociais</Profile.Title>
          </Profile.SocialHeader>
          <Profile.SocialContent>
            <Form.FormGroup>
              <Form.Label for="">Facebook</Form.Label>
              <Form.Input type="text" class="form-input" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label for="">Twitter</Form.Label>
              <Form.Input type="text" class="form-input" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label for="">Instagram</Form.Label>
              <Form.Input type="text" class="form-input" />
            </Form.FormGroup>
            <Form.FormGroup>
              <Form.Label for="">Linkedin</Form.Label>
              <Form.Input />
            </Form.FormGroup>
          </Profile.SocialContent>
          <Form.FormGroup>
            <Form.SubmitInput value="Salvar Alterações" />
          </Form.FormGroup>
        </Profile.Social>
      </Form>
    </Profile>
  );
};

export default ProfileContainer;
