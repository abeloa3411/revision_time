import React, { useState } from "react";
import {
  ButtonIcon,
  ButtonSpan,
  EmailIcon,
  InnerContainer,
  PasswordIcon,
  Screen,
  ScreenBackground,
  ScreenBackgroundShapFour,
  ScreenBackgroundShapOne,
  ScreenBackgroundShapThree,
  ScreenBackgroundShapTwo,
  ScreenContent,
  SignupButton,
  SignupContainer,
  SignupField,
  SignupForm,
  SignupInput,
  SocialIcons,
  SocialLogin,
} from "./SignupStyles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { email, password } = formData;
  return (
    <>
      <SignupContainer>
        <InnerContainer>
          <Screen>
            <ScreenContent>
              <SignupForm>
                <SignupField>
                  <EmailIcon />
                  <SignupInput
                    type="text"
                    placeholder="User name"
                    value={email}
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }}
                  />
                </SignupField>
                <SignupField>
                  <EmailIcon />
                  <SignupInput
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }));
                    }}
                  />
                </SignupField>
                <SignupField>
                  <PasswordIcon />
                  <SignupInput
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
                </SignupField>
                <SignupButton>
                  <ButtonSpan>Sign Up Now</ButtonSpan>
                  <ButtonIcon />
                </SignupButton>
              </SignupForm>
              <SocialLogin>
                <h3>Sign up via</h3>
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
      </SignupContainer>
    </>
  );
};

export default Signup;
