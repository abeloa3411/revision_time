import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background: #0d0d0d;
  z-index: 99;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem;
`;

export const SidebarMenuItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const SidebarCopyright = styled.div`
  position: absolute;
  bottom: 1%;
  color: white;
  text-align: center;
  width: 100%;
`;
