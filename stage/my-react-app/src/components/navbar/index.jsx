import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";


const NavbarContainer = styled.div `
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653" };

`;

const AccessibilityContainer = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)
`
  font-size: 16px;
  color:#fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    color:contrast(0.6);
  }
`;

const Seperator = styled.div `
  min-height: 35%;
  width: 1.3px;
  background-color: #fff;
`;


export function Navbar(props) {
    const { useTransparent } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return ( <
        NavbarContainer useTransparent = { useTransparent } >
        <
        BrandLogo hideLogo color = "rgba(255, 255, 255, 0.9)" / >
        <
        AccessibilityContainer >

        <
        AnchorLink to = "/admin/signin" > Login as Admin < /AnchorLink> <
        Marginer direction = 'horizontal'
        margin = { 4 }
        />

        <
        Link to = '/suivie' >

        <
        Button size = { 12 } > Suivie < /Button>

        <
        /Link>


        <
        Marginer direction = 'horizontal'
        margin = { 18 }
        /><
        Seperator / >

        <
        Marginer direction = 'horizontal'
        margin = { 18 }
        />

        <
        Link to = '/admin/signup' >

        <
        Button size = { 12 } > Register as Admin < /Button>

        <
        /Link>

        <
        Marginer direction = 'horizontal'
        margin = { 18 }
        /><
        Seperator / >

        <
        Marginer direction = 'horizontal'
        margin = { 18 }
        /><
        AnchorLink to = '/aboutus' > About Us < /AnchorLink>  <
        Marginer direction = 'horizontal'
        margin = { 18 }
        />  < Seperator / >
        <
        Marginer direction = 'horizontal'
        margin = { 8 }
        /> <
        Link to = '/customer/access/signup' >
        <
        Button size = { 12 } > Register < /Button> < /
        Link > <
        Marginer direction = 'horizontal'
        margin = { 4 }
        /> <
        AnchorLink to = "/customer/access/signin" > Login < /AnchorLink> < /
        AccessibilityContainer > <
        /NavbarContainer>
    );
}