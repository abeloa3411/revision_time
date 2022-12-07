import React, { useState } from "react";
import {
  ButtonIcon,
  ButtonSpan,
  EmailIcon,
  InnerContainer,
  LoginButton,
  LoginContainer,
  LoginField,
  LoginForm,
  LoginInput,
  PasswordIcon,
  Screen,
  ScreenBackground,
  ScreenBackgroundShapFour,
  ScreenBackgroundShapOne,
  ScreenBackgroundShapThree,
  ScreenBackgroundShapTwo,
  ScreenContent,
  SocialIcons,
  SocialLogin,
} from "./LoginStyles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { email, password } = formData;
  return (
    <>
      <LoginContainer>
        <InnerContainer>
          <Screen>
            <ScreenContent>
              <LoginForm>
                <LoginField>
                  <EmailIcon />
                  <LoginInput
                    type="text"
                    placeholder="User nane / Email"
                    value={email}
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }}
                  />
                </LoginField>
                <LoginField>
                  <PasswordIcon />
                  <LoginInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                      }));
                    }}
                  />
                </LoginField>
                <LoginButton>
                  <ButtonSpan>Log In Now</ButtonSpan>
                  <ButtonIcon />
                </LoginButton>
              </LoginForm>
              <SocialLogin>
                <h3>Log In via</h3>
                <SocialIcons>
                  <FaTwitter />
                  <FaFacebook />
                  <FaInstagram />
                </SocialIcons>
              </SocialLogin>
              <ScreenBackground>
                <ScreenBackgroundShapFour></ScreenBackgroundShapFour>
                <ScreenBackgroundShapThree></ScreenBackgroundShapThree>
                <ScreenBackgroundShapTwo></ScreenBackgroundShapTwo>
                <ScreenBackgroundShapOne></ScreenBackgroundShapOne>
              </ScreenBackground>
            </ScreenContent>
          </Screen>
        </InnerContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
