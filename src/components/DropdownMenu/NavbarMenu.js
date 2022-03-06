import React, { useState } from 'react';
import {
  NavMenu,
  LeftSection,
  MiddleSection,
  RightSection,
} from './NavbarElements';
import Logo from '../Logo';
import Navbar from './Navbar';
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from './Responsive';

const NavbarMenu = () => {
  const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})
  return (
    <NavMenu>
      <LeftSection><Logo/></LeftSection>
      <MiddleSection>      
        <Navbar/>
      </MiddleSection>
      {/* <RightSection>
        
      </RightSection> */}
    </NavMenu>
  );
};

export default NavbarMenu;
