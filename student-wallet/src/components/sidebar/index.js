import React from "react";
import { CloseIcon, Icon, SidebarContainer } from "./SidebarStyles";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
