import { FaChevronCircleRight, FaLock, FaUser } from "react-icons/fa";
import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #c7c5f4, #776bcc);
  height: 100vh;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Screen = styled.div`
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 600px;
  width: 400px;
  box-shadow: 0px 0px 24px #5c5696;
`;

export const ScreenContent = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
`;
export const LoginForm = styled.form`
  width: 360px;
  padding: 30px;
  padding-top: 156px;
`;
export const LoginField = styled.div`
  padding: 20px 20px;
  position: relative;
`;

export const EmailIcon = styled(FaUser)`
  position: absolute;
  top: 30px;
  color: #7875b5;
`;

export const PasswordIcon = styled(FaLock)`
  position: absolute;
  top: 30px;
  color: #7875b5;
`;

export const ButtonIcon = styled(FaChevronCircleRight)`
  font-size: 24px;
  margin-left: auto;
  color: #7875b5;
`;

export const LoginButton = styled.button`
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0px 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.2s;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    border-color: #6a679e;
  }
`;
export const SocialLogin = styled.div`
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0;
  right: 0;
  color: #fff;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ScreenBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
`;

export const LoginInput = styled.input`
  border: none;
  border-bottom: 2px solid #d1d1d4;
  padding: 10px;
  background: none;
  padding-left: 24px;
  font-weight: 700;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    border-bottom-color: #6a679e;
  }
`;

export const ButtonSpan = styled.span`
  width: 100%;
`;

export const ScreenBackgroundShapOne = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
`;

export const ScreenBackgroundShapTwo = styled.span`
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
  position: absolute;
`;
export const ScreenBackgroundShapThree = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
`;
export const ScreenBackgroundShapFour = styled.span`
  transform: rotate(45deg);
  position: absolute;
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
`;
