import React from 'react';
import styled from 'styled-components';

import { SCREENS } from '../../components/responsive';

import BlobImg from '../../images/blob.svg';
import { BrandLogo } from '../../components/brandLogo';
import { Marginer } from '../../components/marginer';
import { Button } from '../../components/button';
import { useMediaQuery } from "react-responsive";
import { deviceSize } from '../../components/responsive';

import TopSectionBackgroundImg from "../../images/imageprojetprix.jpg";
import TheBestSpecialistsImg from "../../images/image1.png";

const TopSectionContainer = styled.div `
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
  `;






const BackgroundFilter = styled.div `
width :100%;
height: 100%;
background-color: rgba(0, 150, 136, 0.6);
display : flex;
flex-direction: column;


`;

const TopSectionInnerContainer = styled.div `
width :100%;
height : 100%;
display :flex;
align-items:center;
justify-content: space-evenly;

`;

const StandoutImage = styled.div `
  width: 44em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;




const RightContainer = styled.div `
    width:50%;
    display:flex;
    flex-col;
    relative;
    margin-top:20px;


`;




const BlobContainer = styled.div `
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;



const LogoContainer = styled.div `
display:flex;
flex-direction:column;
align-items:flex-start;
margin-right:300px;
margin-top:-200px;

@media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin-left:70px;

  }
`;

const SloganText = styled.h3 `
  margin: 0;
  line-height: 1.4;
  color:#fff;
  font-weight: 620;
  font-size: 25px;
  margin-left:7px;


  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;


  }

`;


export function TopSection(props) {
    const { children } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return ( <
        TopSectionContainer >
        <
        BackgroundFilter > { children }

        <
        TopSectionInnerContainer >
        <
        LogoContainer >
        <
        BrandLogo hideLogo logoSize = { isMobile ? 45 : 60 }
        textSize = { isMobile ? 25 : 30 }
        color = "rgba(255, 255, 255, 0.9)"

        /
        >
        <
        Marginer direction = 'vertical'
        margin = { 2 }
        /> <
        SloganText > Buy At The Best Price < /SloganText> <
        SloganText > Everything You Need With Us < /SloganText> <
        Marginer direction = 'vertical'
        margin = { 15 }
        /> < /
        LogoContainer >
        <
        Marginer direction = 'horizontal'
        margin = { 0.5 }
        />

        {
            !isMobile && ( <
                StandoutImage >
                <
                img src = { TheBestSpecialistsImg }
                alt = "best in the field" / >
                <
                /StandoutImage>
            )
        }





        <
        /TopSectionInnerContainer>




        <
        /BackgroundFilter> < /
        TopSectionContainer >










    );
}