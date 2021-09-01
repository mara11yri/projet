import React from "react";
import styled, { withTheme } from "styled-components";
import { BrandLogo } from "../brandLogo";
import { deviceSize } from "../responsive";
import { Link } from "react-router-dom";
import { Marginer } from "../marginer";
import TheBestSpecialistsImg from "../../images/Work only with the best.png";
import { Button } from "../button";
import { useMediaQuery } from "react-responsive";

const StuffAdContainer = styled.div `
  width: 100%;
  height: 500px;
  display: flex-start;
  background-color:#00695c;
  align-items: center;
  justify-content: center;

`;

const ContentContainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;


const Slogan = styled.h2 `
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div `
  width: 35em;
  height: 29em;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;


const ViewMoreButton = styled(Button)
`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;

  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }

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
    color:black;
  }
`;
export function StuffAd(props) {

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
    return ( <
        StuffAdContainer >
        <
        ContentContainer >
        <
        SloganContainer >
        <
        BrandLogo hideLogo logoSize = { isMobile ? 33 : 50 }
        textSize = { isMobile ? 28 : 25 }
        color = "white"

        /
        >
        <
        Marginer direction = 'vertical'
        margin = '0.8em' / >
        <
        SloganContainer >
        <
        Slogan > You are here to buy < /Slogan> <
        Slogan > something you need ? < /Slogan> <
        Slogan > Just click here < /Slogan> < /
        SloganContainer > <
        Marginer direction = 'vertical'
        margin = { 10 }
        /> <
        Link to = '/customer' >
        <
        ViewMoreButton > Put your references < /ViewMoreButton> 

        <
        /
        Link >


        <
        /
        SloganContainer > <
        StandoutImage >
        <
        img src = { TheBestSpecialistsImg }
        alt = 'buy what you need' / >

        <
        /StandoutImage> < /
        ContentContainer > <
        /StuffAdContainer>
    );
}