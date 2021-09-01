import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";

const AboutusContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex-start;

  align-items: center;
  justify-content: center;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);


`;



const ViewMoreButton = styled(Button)
`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;

  &:hover {
    background-color: #4db6ac ;
    filter: contrast(0.8);
  }

`;
const Title = styled.h1 `
  font-weight: 500;

  font-size:25px;
  color:#00695c;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const Text = styled.h3 `
  font-weight: 400;
  color: #000;
  font-size:20px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

export function AboutUs(props) {
    return ( < AboutusContainer >

        <
        Title > About Us < /Title>

        <
        Text > PriceRack is a website created by the company INNOVUP, which is a Tunisian startup founded by Khalil Driss working in the IT and new technologies sector, which consists on the development of innovative and intelligent applications. < /Text> <
        Text > This website is designed
        for people who will buy whatever they want at lower prices than from other sources. < /Text>

        <
        ViewMoreButton > Read more < /ViewMoreButton>

        <
        /AboutusContainer>





    );
}