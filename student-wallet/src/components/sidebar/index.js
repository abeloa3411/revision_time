import React from "react";
import { Button } from "../../GlobalStyles";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarCopyright,
  SidebarLink,
  SidebarMenu,
  SidebarMenuItem,
} from "./SidebarStyles";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink to="/exams">Home</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/cats">Exams</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/cats">Cats</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/cats">About</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Button>
              <SidebarLink style={{ color: "black" }} to="/login">
                Login
              </SidebarLink>
            </Button>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Button primary>
              <SidebarLink to="/signup">Get Started</SidebarLink>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarCopyright>
          <small>{new Date().getFullYear() + ` student wallet`}</small>
        </SidebarCopyright>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
